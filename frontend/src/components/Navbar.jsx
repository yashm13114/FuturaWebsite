import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Navbar.css'
import {
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';
const Navbar = () => {
    initTE({ Ripple });

   



    return (
        <>
            <div className=''>

                <a href="/"><img src="https://www.futuradx.com/wp-content/uploads/2020/10/Futura.png" className='w-44 mb-10 pb-10 mt-16 flex justify-start  ml-8' alt="" /></a>

                <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
                <label for="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">

                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="/Contactus">Contact</Link></li>
                    </ul>
                </nav>

            </div>






        </>
    )
}

export default Navbar