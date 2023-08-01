import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarPRMS from '../NavbarPRMS';

export default function Userlogin() {
  const navigate = useNavigate();

  const [logdata, setdata] = useState({
    email: "",
    password: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setdata((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { email, password } = logdata;

    // Display "Signing in..." message
    const signInToast = toast.info("Signing in...", {
      position: "top-center",
      autoClose: false // Do not automatically close the toast
    });

    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      // Display error message received from the server
      toast.dismiss(signInToast);
      toast.error(data.error, {
        position: "top-center",
        autoClose: 5000 // Set toast duration to 5000 milliseconds (5 seconds)
      });
    } else {
      // Handle successful login
      toast.dismiss(signInToast); // Dismiss the "Signing in..." message
      toast.success("Login done successfully", {
        position: "top-center",
        autoClose: 5000 // Set toast duration to 5000 milliseconds (5 seconds)
      });
      setdata({ email: "", password: "" });
      navigate("/signin/users/login/verifyOtp");
    }
  };

  return (
    <div className='relative w-full h-screen backdrop-blur-sm'>
      <NavbarPRMS />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[500px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
          <h2 className='text-4xl font-bold text-center py-4'>USER LOGIN</h2>
          <div className='flex flex-col mb-4'>
            <label>Email</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Email'
              type='email'
              onChange={adddata}
              value={logdata.email}
              name='email'
            />
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Password'
              type='password'
              onChange={adddata}
              value={logdata.password}
              name='password'
            />
          </div>
          <button
            className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'
            onClick={senddata}
          >
            Login
          </button>
          <p className='text-center mt-8'>Not a member? Sign up now</p>
          <NavLink to='/signin/users/login/users/register'>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white '>
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
