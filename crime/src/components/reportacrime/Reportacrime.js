import React from 'react';
// import NavbarPRMS from '../NavbarPRMS';
import { ToastContainer} from 'react-toastify';
import NavbarUser from '../NavbarUser';
export default function Reportacrime() {
return (
    <div className='relative w-full h-screen backdrop-blur-sm'>
        {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src="" alt="/" /> */}
        <NavbarUser/>

        <div className='flex justify-center items-center h-full'>
        <form className='max-w-[500px] w-full max-h-[900px] mx-auto bg-white p-8 mt-20 mb-8'>
                <h2 className='text-4xl font-bold text-center py-4 mb-4'>REPORT A CRIME</h2>
                <div className='flex flex-row justify-center'>
                <div className='flex flex-col mr-16 '>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Cyber Crime</label>
                    <a href={`tel:1234520`} className='text-blue-700'>Connect For Help</a>
                </div>  
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Organized Crime</label>
                    <a href={`tel:1234513`} className='text-blue-700'>Connect For Help</a>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Terrorist Activities</label>
                    <a href={`tel:1234514`} className='text-blue-700'>Connect For Help</a>
                </div>
              
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Women Help Line</label>
                    <a href={`tel:1234516`} className='text-blue-700'>Connect For Help</a>
                </div>
                </div>

                <div className='flex flex-col'>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Child Help Line</label>
                    <a href={`tel:1234517`} className='text-blue-700'>Connect For Help</a>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>DG Control Room</label>
                    <a href={`tel:1234518`} className='text-blue-700'>Connect For Help</a>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Anti Corruption Bureau</label>
                    <a href={`tel:1234512`} className='text-blue-700'>Connect For Help</a>
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-red-600 font-semibold'>Other Crime Crime</label>
                    <a href={`tel:1234519`} className='text-blue-700'>Connect For Help</a>
                </div>
                </div>
                </div>
                {/* <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={senddata}>Login</button>
                <p className='text-center mt-8'>Not a member? Sign up now</p>
                <NavLink to="/signin/users/login/users/register">
                <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white '>Sign Up</button>
                </NavLink> */}
            </form>
        </div>
        <ToastContainer/>
    </div>
)
}