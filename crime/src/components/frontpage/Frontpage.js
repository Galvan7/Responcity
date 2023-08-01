import React from 'react';
// import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar';
export default function Frontpage() {

    return (

        // <div className="bg-right bg-no-repeat font-sans relative flex flex-col justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5 ">
        <div className="frontPos bg-right bg-no-repeat font-sans relative justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter bg-opacity-5">
        {/* // <div className='frontPos justify-center overflow-hidden h-full w-full flex flex-col'> */}
        {/* <img className='bgimg' src='./firstpgimg1.png' alt=''/> */}
        <Navbar/>
           
        </div>
    );
}