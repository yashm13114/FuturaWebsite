import React from 'react'
import "./header.css"
// Initialization for ES Users
import {
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';
import Clients from './Clients';
import Navbar from './Navbar';

const Header = () => {
    initTE({ Ripple });

    return (
        <>
            <section className=''>
                <Navbar />
                <div>


                    <div className='header '>
                        <p className='lg:pr-0 lg:pl-0 pl-10 pr-10  lg:text-8xl grid justify-center text-6xl font-bold text-white font-sans font-outline-2 outline-white text-opacity-25'>Unlocking Water Potential </p>
                        <p className='lg:text-8xl text-white flex justify-center text-6xl font-bold font-sans font-outline-2 outline-white text-opacity-25'>With Futura</p>
                    </div>

                    {/* <img  src="https://static.vecteezy.com/system/resources/previews/014/606/237/original/blue-water-wave-line-icon-in-the-sea-free-png.png" className='flex justify-center h-24 w-60'/> */}
                    <p className=' lg:text-4xl text-2xl lg:pl-0 pl-5  mt-3 grid justify-center '>Your search for High COD Effluent Treatment ends here..</p>
                    <div className=' flex justify-center'>
                        <button className='font-bold rounded-full p-4 mt-5 font-sans hover:text-white border-2 hover:bg-transparent bg-white text-blue-400 mr-4'>Contact Us</button>
                        <button className='font-bold rounded-full p-4 mt-5 font-sans text-white border-2  border-white hover:bg-white hover:text-blue-400'>Explore more</button>


                    </div>




                </div>
                <div className="wave wave1">

                </div>
                <div className="wave wave"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
            
            {/* services */}
            <div className='service ml-10 mr-10 rounded-xl pt-5 mb-10'>

                <h1 className='grid justify-center text-7xl font-bold pt-5 text-white font-sans font-outline-2 outline-white text-opacity-25'>Services</h1>

                <div className="lg:pl-0 pl-10 lg:pr-0 pr-10 py-4 lg:flex md:flex lg:justify-evenly inline-block">
                    <div className="pb-10 shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center   content-div">
                        <div>
                            <div className="w-full image-cover rounded-t-md" >
                                <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div className="py-4 px-4 bg-white  rounded-md fd-cl group-hover:opacity-25">
                                <span className="block text-lg text-gray-800 font-bold tracking-wide">Raw Water Treatment</span>
                                <span className="block text-gray-600 text-sm">see more
                                </span>
                            </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span className="text-md overflow-hidden w-1/5 font-bold text-white tracking-wider leading-relaxed font-sans">Optimize water quality with efficient raw <br /> water treatment solutions.</span>
                         
                        </div>
                    </div>
                    <div className="pb-10 lg:pl-0 lg:pr-0 pr-14 pl-14  lg:mt-0 mt-10 shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  content-div">
                        <div>
                            <div className="w-full image-cover rounded-t-md" >
                                <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div className="py-4 px-4 bg-white  rounded-md fd-cl group-hover:opacity-25">
                                <span className="block text-lg text-gray-800 font-bold tracking-wide">Raw Water Treatment</span>
                                <span className="block text-gray-600 text-sm">see more
                                </span>
                            </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span className="text-md overflow-hidden w-1/5 font-bold text-white tracking-wider leading-relaxed font-sans">Optimize water quality with efficient raw <br /> water treatment solutions.</span>
                         
                        </div>
                    </div>
                    <div className="pb-10 lg:pl-0 lg:pr-0 pr-14 pl-14  lg:mt-0 mt-10 shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  content-div">
                        <div>
                            <div className="w-full image-cover rounded-t-md" >
                                <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                                </div>
                            </div>
                            <div className="py-4 px-4 bg-white  rounded-md fd-cl group-hover:opacity-25">
                                <span className="block text-lg text-gray-800 font-bold tracking-wide">Raw Water Treatment</span>
                                <span className="block text-gray-600 text-sm">see more
                                </span>
                            </div>
                        </div>
                        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                            <span className="text-md overflow-hidden w-1/5 font-bold text-white tracking-wider leading-relaxed font-sans">Optimize water quality with efficient raw <br /> water treatment solutions.</span>
                         
                        </div>
                    </div>
                    
                    

                </div>

        
                <div className='flex justify-center'>
                    {/* <button className='bg-transparent border-2 mt-5 pt-3 pb-3 pl-10 pr-10 rounded-full mb-10 text-white border-white  hover:bg-white hover:text-blue-400 '><a href='/Services'>More..</a></button> */}
                    <button className='bg-transparent border-2 mt-5 pt-3 pb-3 pl-10 pr-10 rounded-full mb-10 text-white border-white  hover:bg-white hover:text-blue-400 '><Link to='/Services'>More..</Link></button>

                </div>

            </div>

            {/* clients */}
            <Clients />

            {/* About Us */}
            <h1 className='grid justify-center text-6xl font-bold'> About Us</h1>
            <div className='lg:flex inline-block justify-center pl-24 pr-24 mt-10 '>
                <p className='text-2xl mr-5 '>At Futura Technologies, our passion lies in pioneering cutting-edge solutions for the process, industrial, and manufacturing realms. We specialize in delivering tailored expertise, innovative products, and value-added services that empower our clients to flourish, ensuring both profitability and sustainability. Welcome to a future of limitless possibilities.</p>
                <img src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12859.jpg" className='lg:h-64 h-44 lg:w-96 w-full' alt="" />
            </div>
            <div className='flex justify-center'>

                <button className='bg-transparent border-2 mt-5 pt-3 pb-3 pl-10 pr-10 rounded-full mb-10 text-white border-white  hover:bg-white hover:text-blue-400 '>More..</button>


            </div><br /><br />









        </>
    )
}

export default Header;