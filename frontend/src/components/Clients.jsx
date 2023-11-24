import React, { useState, useEffect } from 'react'
import {
    Carousel,
    initTE,
} from "tw-elements";
import './clients.css'
const Clients = () => {
    initTE({ Carousel });
    return (
        <>
            <div className='flex justify-center font-bold mb-5'>
                <h1 className='text-6xl '>Our Clients</h1>
            </div>
            <main className="relative flex flex-col justify-center  overflow-hidden">
                <div className=" max-w-5xl  py-24">
                    <div className="text-center">


                        <div
                            x-data="{}"
                            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                            className=" inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                        >
                            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                <li>
                                    <img src="https://apcotex.com/assets/img/logo.svg" alt="Facebook" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://img.etimg.com/thumb/msid-96750400,width-210,height-158,imgsize-9904,,resizemode-75/upl.jpg" alt="Disney" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSlFPVhs4nX4YOvYw_WzMs8lJuB6FoqxG9rg&usqp=CAU" alt="Airbnb" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1462527848/lbo9losbnslbaf1hoiwj.jpg" alt="Apple" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://cdn.expresspharma.in/wp-content/uploads/2020/04/17180720/logo-jubilant-life-sciences.jpg" alt="Spark" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://www.dic-global.com/common/images/color_and_comfort.svg" alt="Samsung" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://image4.owler.com/logo/privi-speciality-chemicals_owler_20210622_103705_large.png" alt="Quora" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgqM5KQ7tbuecZBqRFyIZu5hvoaTjaQ8G-g&usqp=CAUhttps://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Sass" className='h-44 w-44' />
                                </li>
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWRdbt0P_DgBhT5i_tWnoicJSsO1sQUpHfw&usqp=CAU" alt="Sass" className='h-44 w-44' />
                                </li>
                                
                            </ul>
                        </div>


                    </div>

                </div>
            </main>

            

        </>
    )
}

export default Clients