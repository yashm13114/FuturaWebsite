import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Navbar = () => {
    return (
        <>
            <nav
                className="rounded-3xl lg:ml-36 md:ml-10 ml-14 mt-10 fixed flex w-4/5 shadow-lg flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-white hover:text-black focus:text-neutral-700 dark:bg-white lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div>
                        <img src="https://www.futuradx.com/wp-content/uploads/2020/10/Futura.png" alt="" className="h-10 w-40" />
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
                                    href="#"
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

                                <a
                                    className="text-2xl flex items-center transition duration-200  hover:ease-in-out  disabled:text-black/30 motion-reduce:transition-none dark:text-blue-600   lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="#"
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
            <Header />
            <Footer />

        </>
    )
}

export default Navbar