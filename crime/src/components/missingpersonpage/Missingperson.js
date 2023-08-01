import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Uploadimg from './Uploadimg';
import NavbarPRMS from '../NavbarPRMS';


export default function Missingperson() {
    const navigate = useNavigate();

    const [logdata, setdata] = useState({
        name: "",
        age: "",
        place: "",
        aadhar: "",
        description: "",
        personreporting: "",
        found: ""
    })
    const adddata = (e) => {
        const { name, value } = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]: value
            }

        })
    }
    const senddata = async (e) => {

        e.preventDefault();
        console.log("I am here")
        const { name, age, place, aadhar, description, personreporting, found } = logdata;
        const res = await fetch("http://localhost:5000/api/police/registermissing", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify({
                name, age, place, aadhar, description, personreporting, found
            })
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem("missingpersondata", JSON.stringify(data));
        if (res.status === 400 || !data) {
            console.log("Invalid details");
            toast.warn("Invalid details or used Aadhar", {
                position: 'top-center'
            })
        } else {
            console.log("data valid")
            // setAccount(data)
            toast.success("FIR submitted successfully", {
                position: "top-center",
                autoClose: 2000, // Auto close after 3 seconds (3000 milliseconds)
            });
            setdata({ ...logdata, name: "", age: "", place: "", aadhar: "", description: "", personreporting: "", found: "" });
            setTimeout(() => {
                navigate("/signin/police/login/policepage");
            }, 2000);
        }


    }
    return (
        <div className='relative w-full h-full backdrop-blur-sm'>
            {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src="" alt="/" /> */}
            <NavbarPRMS/>


            <div className='flex justify-center items-center h-full '>
                <form className='max-w-[600px] w-full max-h-[900px] mx-auto bg-white p-8 mt-8 mb-8'>
                    <h2 className='text-4xl font-bold text-center py-4'>MISSING PERSON BUREAU</h2>
                    <div className='flex flex-col mb-2'>
                        <label>Name</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Name' type="text" onChange={adddata} value={logdata.name} name="name" />
                    </div>

                    <div className='flex flex-col mb-2'>
                        <label>Age</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Age' type="text" onChange={adddata} value={logdata.age} name="age" />
                    </div>

                    <div className='flex flex-col mb-2'>
                        <label>Place</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Place' type="text" onChange={adddata} value={logdata.place} name="place" />
                    </div>

                    <div className='flex flex-col mb-2'>
                        <label>Aadhar Number</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Aadhar Number' type="text" onChange={adddata} value={logdata.aadhar} name="aadhar" />
                    </div>

                    <div className='flex flex-col mb-2'>
                        <label>Description</label>
                        <textarea className='border relative bg-gray-100 p-2' rows="3" placeholder='Description' type="text" onChange={adddata} value={logdata.description} name="description" />
                    </div>

                    <div className='flex flex-col mb-2'>
                        <label>Person Reporting</label>
                        <input className='border relative bg-gray-100 p-2' placeholder='Person Reporting' type="text" onChange={adddata} value={logdata.personreporting} name="personreporting" />
                    </div>
                    
                    {/* <Uploadimg/> */}
                    
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={senddata}>Submit</button>

                </form>
               
            </div>
            <ToastContainer />
        </div>
    );
}