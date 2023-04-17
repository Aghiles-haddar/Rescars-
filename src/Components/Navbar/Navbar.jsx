import React, {useState} from "react";
import './Navbar.css'
import logo from '../../images/logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";


import { FaBeer } from 'react-icons/fa';

import { FaRegTimesCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const Navbar = () => {
    
    const [navbar, setNavbar] = useState('navbar');

    const showNavbar = ()=>{
        setNavbar('navbar showNavbar');
    }

    const removeNavbar = ()=>{
        setNavbar('navbar');
    }

    const [header,setHeader] = useState('header')
    const addBg = ()=>{
        if(window.scrollY >=20){
            setHeader('header addBg')
        }
    }
    window.addEventListener('scroll' , addBg)

    return (
        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="" className="logo" />
            </div>

            <div className={navbar}>
                <ul className="menu">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="#" className="link">Used cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="#" className="link">New car</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="#" className="link">Auctions</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="#" className="link">Sell</a>
                    </li>
                </ul>

                <FaRegTimesCircle className="icon closeIcon" onClick={removeNavbar}/>

            
                
                
            </div>

            <div className="signUp flex">
                <div className="text">
                    Sign up
                </div>
                <FaBars className="icon toggleNavbarIcon" onClick={showNavbar} />

            </div>
        </div>
    )
}

export default Navbar;