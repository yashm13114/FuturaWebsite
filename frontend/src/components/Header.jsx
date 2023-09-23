import React from 'react'
import "./header.css"
// Initialization for ES Users
import {
    Ripple,
    initTE,
} from "tw-elements";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Carousel, IconButton } from "@material-tailwind/react";
import Clients from './Clients';

const Header = () => {
    initTE({ Ripple });

    return (
        <>
            <div className=" lg:ml-0 ml-24 justify-evenly  container my-52 mx-auto md:px-6 mr-7">

                <div>

                    {/* <p className='w-11/12 text-2xl'>
                        Futura Technologies was eastablished only to research, develop and build the state of art technologies which will affect and enhance the manufacturers facility reliability, EHS Sustainability, performance, better operation and maintenance and impact the ovrall life cycle of the installation. <br/>
                        As you see, these are the key performance objective of any manufacturer or owner operator of a facility and any impact we create by developing a solution affecting these areas, there is value for money we can create.
                    </p> */}
                    <p className='lg:text-8xl grid justify-center text-6xl font-bold text-white font-sans font-outline-2 outline-white text-opacity-25'>Unlocking Water Potential</p>
                    <p className='text-white flex justify-center text-8xl font-bold font-sans font-outline-2 outline-white text-opacity-25'>With Futura</p>
                    {/* <img  src="https://static.vecteezy.com/system/resources/previews/014/606/237/original/blue-water-wave-line-icon-in-the-sea-free-png.png" className='flex justify-center h-24 w-60'/> */}
                    <p className='text-4xl mt-3 grid justify-center '>Your search for High COD Effluent Treatment ends here..</p>
                    <div className='flex justify-center'>
                        <button className='font-bold rounded-full p-4 mt-5 font-sans hover:text-white border-2 hover:bg-transparent bg-white text-blue-400 mr-4'>Contact Us</button>
                        <button className='font-bold rounded-full p-4 mt-5 font-sans text-white border-2  border-white hover:bg-white hover:text-blue-400'>Explore more</button>


                    </div>




                </div>
                {/* <div className='lg:w-9/12 w-4/5'>
                    <img src="https://www.workandjam.com/foto/n12.jpg" className='w-full' alt="" />
                </div> */}

            </div>
            {/* services */}
            <h1 className='grid justify-center text-6xl font-bold'>Services</h1>
            <div className="grid-cols-1 sm:grid md:grid-cols-3 pl-14 pr-14">
                <div
                    className=" bg-transparent mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://aosts.com/wp-content/uploads/2019/03/raw-water-treatment-1.jpg"
                            alt="Hollywood Sign on The Hill" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            Raw Water Treatment
                        </h5>
                        <p className="mb-4 text-base text-black">
                            Optimize water quality with efficient raw water treatment solutions.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="h-72 w-full rounded-t-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXFzt5h_7XLppPgO5GlALK22uTqkS5tzPTQ&usqp=CAU"
                            alt="Palm Springs Road" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            Utility Water Treatment
                        </h5>
                        <p className="mb-4 text-base text-black">
                            Advanced treatment for essential water quality – Utility Water Treatment solutions.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="h-72 w-full rounded-t-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVocIx_pkuZijR9meEDZPo92NYH3mswemy1Q&usqp=CAU"
                            alt="Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            Effluent Water Treatment
                        </h5>
                        <p className="mb-4 text-base text-black">
                            Effluent Water Treatment: Sustainable solutions for cleaner, safer water disposal.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="h-72 w-full rounded-t-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBIxbAT5MQsNevdJz71qQrZZTH_AyqNOmsg&usqp=CAU"
                            alt="Los Angeles Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            ZLD Solutions
                        </h5>
                        <p className="mb-4 text-base text-black">
                            Zero liquid discharge (ZLD) is a strategic wastewater management system that ensures that there will be no discharge of industrial wastewater into the environment.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            Dewatering Screw Press

                        </h5>
                        <p className="mb-4 text-base text-black">
                            A dewatering screw press is a screw press that separates liquids from solids. A screw press can be used in place of a belt press, centrifuge, or filter paper. It is a simple, slow moving device that accomplishes dewatering by continuous gravitational drainage. Screw presses are often used for materials that are difficult to press, for example those that tend to pack together.
                        </p>
                    </div>
                </div>
                <div
                    className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                            alt="Los Angeles Skyscrapers" />
                    </a>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-xl font-medium leading-tight text-black">
                            Card title
                        </h5>
                        <p className="mb-4 text-base text-black">
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </p>
                    </div>
                </div>


            </div>
            <div className='flex justify-center'>
                <button className='bg-transparent border-2 mt-5 pt-3 pb-3 pl-10 pr-10 rounded-full mb-10 text-white border-white  hover:bg-white hover:text-blue-400 '>More..</button>

            </div>
            {/* clients */}
            <Clients />

            {/* About Us */}
            <h1 className='grid justify-center text-6xl font-bold'> About Us</h1>
            <div className='flex justify-center pl-24 pr-24 mt-10 '>
                <p className='text-2xl mr-5'>At Futura Technologies, our passion lies in pioneering cutting-edge solutions for the process, industrial, and manufacturing realms. We specialize in delivering tailored expertise, innovative products, and value-added services that empower our clients to flourish, ensuring both profitability and sustainability. Welcome to a future of limitless possibilities.</p>
                <img src="https://www.futuradx.com/wp-content/uploads/2020/10/Futura.png" className='h-64 w-2/4' alt="" />
            </div>
            <div className='flex justify-center'>

                <button className='bg-transparent border-2 mt-5 pt-3 pb-3 pl-10 pr-10 rounded-full mb-10 text-white border-white  hover:bg-white hover:text-blue-400 '>More..</button>


            </div>


        </>
    )
}

export default Header;