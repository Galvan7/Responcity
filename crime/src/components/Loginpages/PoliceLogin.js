import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarPRMS from '../NavbarPRMS';

export default function PoliceLogin() {
  const navigate = useNavigate();

  const [logdata, setdata] = useState({
    email: "",
    password: "",
    serviceNumber: ""
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

    const { email, password, serviceNumber } = logdata;
    const signInToast = toast.info("Signing in...", {
      position: "top-center",
      autoClose: false // Do not automatically close the toast
    });
    const res = await fetch("http://localhost:5000/api/police/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        serviceNumber
      })
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      // Display error message received from the server
      toast.dismiss(signInToast);
      toast.error(data.error, {
        position: 'top-center',
        autoClose: 5000 // Set toast duration to 5000 milliseconds (5 seconds)
      });
    } else {
      // Handle successful login
      toast.dismiss(signInToast);
      toast.success("Login done successfully", {
        position: "top-center",
        autoClose: 5000 // Set toast duration to 5000 milliseconds (5 seconds)
      });
      setdata({ email: "", password: "", serviceNumber: "" });
      navigate("/signin/police/login/policepage");
    }
  };

  return (
    <div className='relative w-full h-screen backdrop-blur-sm'>
      <NavbarPRMS />

      <div className='flex justify-center items-center h-full'>
        <form className='max-w-[500px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
          <h2 className='text-4xl font-bold text-center py-4'>POLICE LOGIN</h2>
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
          <div className='flex flex-col mb-4'>
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
          <div className='flex flex-col '>
            <label>Service Number</label>
            <input
              className='border relative bg-gray-100 p-2'
              placeholder='Service Number'
              type='text'
              onChange={adddata}
              value={logdata.serviceNumber}
              name='serviceNumber'
            />
          </div>
          <button
            className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'
            onClick={senddata}
          >
            Login
          </button>
          <p className='text-center mt-8'>Don't have an account? Sign up now</p>
          <NavLink to='/signin/police/login/police/register'>
            <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
