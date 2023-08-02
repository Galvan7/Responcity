import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarPRMS from '../NavbarPRMS';

export default function Userlogin() {
    const navigate = useNavigate();

    const [logdata, setdata] = useState({
        email: "",
        otp: ""
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
        const { email, otp } = logdata;
        const res = await fetch("https://responcity.onrender.com/api/users/verifyOtp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                otp
            })
        });

        const data = await res.json();

        if (res.status === 400 || !data) {
            toast.error("Invalid OTP", {
                position: "top-center",
                autoClose: 3000 // Set toast duration to 3000 milliseconds (3 seconds)
            });
        } else {
            toast.success("Login done successfully", {
                position: "top-center",
                autoClose: 5000 // Set toast duration to 5000 milliseconds (5 seconds)
            });
            setdata({ email: "", otp: "" });
            navigate("/signin/users/login/verifyOtp/userspage");
        }
    };

    return (
        <div className='relative w-full h-screen backdrop-blur-sm'>
            <NavbarPRMS />
            <div className='flex justify-center items-center h-full'>
                <form className='max-w-[500px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
                    <h2 className='text-4xl font-bold text-center py-4'>User OTP Verification</h2>
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
                        <label>OTP</label>
                        <input
                            className='border relative bg-gray-100 p-2'
                            placeholder='OTP'
                            type='text'
                            onChange={adddata}
                            value={logdata.otp}
                            name='otp'
                        />
                    </div>
                    <button
                        className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'
                        onClick={senddata}
                    >
                        Verify
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
