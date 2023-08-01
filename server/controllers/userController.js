const asyncHandler = require('express-async-handler');
const generateToken = require('../config/token');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const UserOtpVerification = require('../models/userOtp');

// Registering a user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, aadhar, password, cpassword } = req.body;

  if (!name || !email || !aadhar || !password || !cpassword) {
    res.status(400).json({ "error": "Please fill all the fields" });
    return;
  }

  // Checking if email is already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ "error": "User already registered" });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const user = new User({
    name,
    email,
    aadhar,
    password: bcrypt.hashSync(password, salt),
    cpassword: bcrypt.hashSync(cpassword, salt)
  });

  const result = await user.save();
  // Registration is successful
  if (result) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      aadhar: user.aadhar,
      password: user.password,
      cpassword: user.cpassword,
      token: generateToken(user.id)
    });
  } else {
    // Registration is not successful
    res.status(400).json({ "error": "Failed to create user" });
  }
});

// Verifying a registered user (Login)
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userOTPVerificationRecords = await UserOtpVerification.find({ email });
  if (userOTPVerificationRecords.length > 0) {
    await UserOtpVerification.deleteMany({ email });
  }

  const userFound = await User.findOne({ email });

  if (!userFound) {
    res.status(400).json({ "error": "Invalid credentials" });
    return;
  }

  const id = userFound.id;

  if (userFound && bcrypt.compareSync(password, userFound.password)) {
    const loggedInUser = await User.findById(userFound._id);
    sendOTPVerificationEmail({ id, email }, res, loggedInUser);
  } else {
    res.status(400).json({ "error": "Invalid credentials" });
  }
});

// Send OTP verification email
const sendOTPVerificationEmail = async ({ id, email }, res, loggedInUser) => {
  try {
    const otp = `${Math.floor(1000 + Math.random() * 9000)}`;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'amansamsung2003@gmail.com',
        pass: 'lobbmrhjduwfowlf'
      }
    });

    const mailOptions = {
      from: 'amansamsung2003@gmail.com',
      to: email,
      subject: 'OTP for Verification',
      html: `<p>Enter ${otp} to verify and continue to Responcity</p>`
    };

    const info = await transporter.sendMail(mailOptions);

    const salt = 10;
    const hashedOTP = await bcrypt.hash(otp, salt);
    const newOTPVerification = new UserOtpVerification({
      userId: id,
      email: email,
      otp: hashedOTP,
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000
    });

    await newOTPVerification.save();

    res.status(201).json({
      loggedInUser,
      token: generateToken(loggedInUser.id),
      status: 'PENDING',
      message: 'Verification OTP email sent'
    });
  } catch (error) {
    res.status(400).json({
      status: 'FAILED',
      message: error.message
    });
  }
};

const userOTP = asyncHandler(async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      throw new Error('Empty OTP details not allowed');
    } else {
      const userOTPVerificationRecords = await UserOtpVerification.find({ email });

      if (userOTPVerificationRecords.length <= 0) {
        throw new Error('Record does not exist');
      } else {
        const { expiresAt } = userOTPVerificationRecords[0];
        const hashedOTP = userOTPVerificationRecords[0].otp;

        if (expiresAt < Date.now()) {
          await UserOtpVerification.deleteMany({ email });
          throw new Error('Code has expired. Please request again');
        } else {
          const validOTP = await bcrypt.compare(otp, hashedOTP);
          if (!validOTP) {
            throw new Error('Invalid code passed');
          } else {
            await User.updateOne({ email }, { verified: true });
            await UserOtpVerification.deleteMany({ email });
            res.status(201).json({
              status: 'verified',
              message: 'User email verified successfully'
            });
          }
        }
      }
    }
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  }
});

const resendUserOTP = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    const useremail = await User.findOne({ email: email });
    const id = useremail ? useremail.id : null;

    if (!email) {
      throw Error('Empty details');
    } else {
      await UserOtpVerification.deleteMany({ email });
      sendOTPVerificationEmail({ id, email }, res);
    }
  } catch (err) {
    res.status(400).json({
      status: 'Failed',
      message: err.message
    });
  }
});

module.exports = { registerUser, loginUser, userOTP, resendUserOTP };
