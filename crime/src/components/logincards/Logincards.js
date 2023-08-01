import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarPRMS from '../NavbarPRMS';

function Logincards(){

    return(
        <div>
        <NavbarPRMS/>
        <div className='Cardbox backdrop-blur-sm'>
        
        <div className='Card mr-8'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img className="cardimg" src="./user2.jpg" alt="" />
                </div>
            </div>
            <div className='lower-container'>
                <h3>USER</h3>
                <NavLink to="users/login/">
                <button className='cardbtn'>User Login</button>
                </NavLink>
            </div>
        </div>
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img className="cardimg" src="./police2.jpg" alt=""/>
                </div>
            </div>
            <div className='lower-container'>
                <h3>POLICE</h3>
                <NavLink to="police/login/">
                <button className='cardbtn'>Police Login</button>
                </NavLink>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Logincards