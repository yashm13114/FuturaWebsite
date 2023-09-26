import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';
const Navbar = () => {
    initTE({ Ripple });

    // Get the button
    const mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
        }
    };
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  

    // mybutton.addEventListener("click", backToTop);

    // window.addEventListener("scroll", scrollFunction);



    return (
        <>
            <nav
                className="rounded-3xl lg:ml-36 md:ml-10 ml-14 mt-10 fixed flex lg:w-4/5 w-2/4 shadow-lg flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-white hover:text-black focus:text-neutral-700 dark:bg-white lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div>
                       <a href='/'> <img src="https://www.futuradx.com/wp-content/uploads/2020/10/Futura.png" alt="" className="h-10 w-40" /></a>
                    </div>
                    

                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-blue-300-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent7"
                        aria-controls="navbarSupportedContent7"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>


                    <div
                        className="!visible rounded-full mt-10 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent7"
                        data-te-collapse-item>

                        <ul
                            className="font-bold list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                            data-te-navbar-nav-ref>


                            <li
                                className="hover:border-b-4 hover:border-blue-500 hover:rounded-md mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    className="text-2xl p-0 text-blue-300-300 transition duration-200 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600  dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
                                    data-te-nav-link-ref
                                >Home</a>


                            </li>

                            <li
                                className="hover:border-b-4 hover:border-blue-500 hover:rounded-md mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    className="text-2xl p-0 text-neutral-500 transition duration-200 hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600  dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Services"
                                    data-te-nav-link-ref
                                >Services</a>

                            </li>
                            <li
                                className=" hover:border-b-4 hover:border-blue-500 hover:rounded-md mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    className="text-2xl p-0 text-neutral-500 transition duration-200  hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
                                    data-te-nav-link-ref
                                >About us</a>

                            </li>

                            <li
                                className=" hover:border-b-4 hover:border-blue-500 hover:rounded-md mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref
                                data-te-dropdown-ref>

                                {/* <a
                                    className="text-2xl flex items-center transition duration-200  hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false">
                                    Contact us

                                </a> */}
                                <a
                                    className="text-2xl flex items-center transition duration-200  hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Contactus"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false">
                                    Contact us

                                </a>

                            </li>


                        </ul>
                    </div>
                </div>
            </nav><br /><br />
            <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="!fixed bottom-5 right-5 hidden rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
                id="btn-back-to-top">
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="h-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        fill="currentColor"
                        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                </svg>
            </button>



            

        </>
    )
}

export default Navbar