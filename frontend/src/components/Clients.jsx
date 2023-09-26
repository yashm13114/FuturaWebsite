import React, { useState, useEffect } from 'react'
import {
    Carousel,
    initTE,
} from "tw-elements";

const Clients = () => {
    initTE({ Carousel });


    return (
        <>
            <div
                id="carouselExampleIndicators"
                className=" pl-10 pr-10"
                data-te-carousel-init
                data-te-ride="carousel">
                   <div className='flex justify-center font-bold mb-5'>
                   <h1 className='text-6xl '>Our Clients</h1>
                   </div>

                <div
                    className=" bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="4"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 4"></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleIndicators"
                        data-te-slide-to="5"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 5"></button>
                    
                   
                </div>


                <div
                    className="  overflow-hidden after:clear-both after:block after:content-['']">

                    <div
                        className=" float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active>
                        <div className='flex justify-between'>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWRdbt0P_DgBhT5i_tWnoicJSsO1sQUpHfw&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgqM5KQ7tbuecZBqRFyIZu5hvoaTjaQ8G-g&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://image4.owler.com/logo/privi-speciality-chemicals_owler_20210622_103705_large.png"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />

                        </div>

                    </div>

                    <div
                        className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <div className='flex justify-between'>
                            <img
                                src="https://www.dic-global.com/common/images/color_and_comfort.svg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://cdn.expresspharma.in/wp-content/uploads/2020/04/17180720/logo-jubilant-life-sciences.jpg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1462527848/lbo9losbnslbaf1hoiwj.jpg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />

                        </div>

                    </div>

                    <div
                        className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <div className='flex justify-between'>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlFPVhs4nX4YOvYw_WzMs8lJuB6FoqxG9rg&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://img.etimg.com/thumb/msid-96750400,width-210,height-158,imgsize-9904,,resizemode-75/upl.jpg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://apcotex.com/assets/img/logo.svg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />

                        </div>

                    </div>
                    <div
                        className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <div className='flex justify-between'>
                            <img
                                src="https://poddarpigmentsltd.com/images/logo.png"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcn_CadFYf_Eh6ht4uLisBW27UwP8racJ3Q&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://d1io3yog0oux5.cloudfront.net/_adc9d7468c6feeac8b6897a02310a22d/huntsman/files/theme/images/logo.svg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />

                        </div>

                    </div>
                    <div
                        className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <div className='flex justify-between'>
                            <img
                                src="https://kaleesuwari.com/front-end/images/icons/logo/footer_white_logo.png"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtdQl8w2XD_nSbJtXeUhzeJqK7MnpALTDznw&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://3.imimg.com/data3/IA/TE/MY-3060449/subhashi-1000x1000.jpg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />

                        </div>

                    </div>
                    <div
                        className=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item>
                        <div className='flex justify-between'>
                            <img
                                src="http://www.marketsguruji.com/wp-content/uploads/2017/08/Logo-5.jpg"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEqCcYJQzx_1_jDnhqiowa8Abk42_kFQo0Q&usqp=CAU"
                                className="block w-96 h-32 "
                                alt="Wild Landscape" />
                           

                        </div>

                    </div>
                </div>
                <div className='flex justify-between mt-10 mb-10'> 
                    <div className='grid justify-start'>
                        <button
                            className=" bottom-0 left-0 top-0 z-[1]  w-[15%] items-center  border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExampleIndicators"
                            data-te-slide="prev">
                            <span className="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </span>
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Previous</span>

                        </button>
                    </div>

                    <div className='grid justify-end'>
                        <button
                            className=" bottom-0 right-0 top-0 z-[1]  w-[15%]  border-0 bg-none p-0 text-center  opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                            type="button"
                            data-te-target="#carouselExampleIndicators"
                            data-te-slide="next">
                            <span className="inline-block h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-10 w-10">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                            <span
                                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Next</span>

                        </button>
                    </div>
                </div>


            </div>
             


        </>
    )
}

export default Clients