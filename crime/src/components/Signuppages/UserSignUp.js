import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarPRMS from '../NavbarPRMS';

const UserSignUp = () => {
  const navigate = useNavigate();
  const [udata, sdata] = useState({
    name: "",
    email: "",
    aadhar: "",
    password: "",
    cpassword: ""
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    sdata((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { name, email, aadhar, password, cpassword } = udata;
    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        aadhar,
        password,
        cpassword
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      // Display error message received from the server
      toast.warn(data.error, {
        position: "top-center"
      });
    } else {
      // Handle successful sign up
      toast.success("Data successfully added", {
        position: "top-center"
      });

      setTimeout(() => {
        sdata({ name: "", email: "", aadhar: "", password: "", cpassword: "" });
        navigate("/signin/users/login");
      }, 2000); // Delay of 2 seconds (2000 milliseconds)
    }
  };

  return (
    <div className='relative w-full h-screen backdrop-blur-sm'>
      <NavbarPRMS />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[600px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
          <h2 className='text-4xl font-bold text-center py-4'>USER SIGN UP</h2>
          <div className='flex flex-col mb-4'>
            <label>Name</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Name'
              type='text'
              onChange={adddata}
              value={udata.name}
              name='name'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label>Email</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Email'
              type='email'
              onChange={adddata}
              value={udata.email}
              name='email'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label>Aadhar Number</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Aadhar Number'
              type='text'
              onChange={adddata}
              value={udata.aadhar}
              name='aadhar'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label>Password</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Password'
              type='password'
              onChange={adddata}
              value={udata.password}
              name='password'
            />
          </div>
          <div className='flex flex-col '>
            <label>Confirm Password</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Confirm Password'
              type='password'
              onChange={adddata}
              value={udata.cpassword}
              name='cpassword'
            />
          </div>
          <button
            className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'
            onClick={senddata}
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserSignUp;
