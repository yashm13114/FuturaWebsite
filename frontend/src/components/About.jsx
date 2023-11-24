import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const About = () => {
    return (
        <>
        <Navbar />
            <section className="mb-32 pl-14 pr-14 mt-32">
                <h2 className="mb-16 text-center text-2xl font-bold">Latest articles</h2>

                <div className="mb-16 flex flex-wrap">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                        <div
                            className="ripple  overflow-hidden rounded-lg  shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="dark">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg" className="w-full" alt="Louvre" />
                            
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                        <h3 className="mb-4 text-2xl font-bold">That's the news!</h3>
                        
                        <p className="mb-6 text-sm text-black ">
                            Published <u>14.01.2022</u> by
                            <a href="#!">Lisa McCartney</a>
                        </p>
                        <p className="mb-6 text-black">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                            ullamcorper diam.
                        </p>
                        <p className="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                            nulla saepe rerum aspernatur odio amet perferendis tempora
                            mollitia? Ratione unde magni omnis quaerat blanditiis cumque
                            dolore placeat rem dignissimos?
                        </p>
                    </div>
                </div>

                <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
                        <div
                            className="ripple  overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg" className="w-full" alt="Louvre" />
                           
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
                        <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
                        <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mr-2 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                            </svg>
                            Art
                        </div>
                        <p className="mb-6 text-sm text-black">
                            Published <u>12.01.2022</u> by
                            <a href="#!">Anna Doe</a>
                        </p>
                        <p className="text-black">
                            Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
                            dui, sit amet rutrum enim massa in ante. Curabitur in justo at
                            lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
                            vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
                            vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
                            tortor finibus, a eleifend lectus dictum. Cras tempor convallis
                            magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
                            imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
                            at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
                            felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
                            iaculis est vehicula ut.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                        <div
                            className="ripple  overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init data-te-ripple-color="light">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg" className="w-full" alt="Louvre" />
                          
                        </div>
                    </div>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                        <h3 className="mb-4 text-2xl font-bold">Stock market boom</h3>
                        <div className="mb-4 flex items-center text-sm font-medium text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mr-2 h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                            </svg>
                            Business
                        </div>
                        <p className="mb-6 text-sm text-black">
                            Published <u>10.01.2022</u> by
                            <a href="#!">Joe Svan</a>
                        </p>
                        <p className="text-black">
                            Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean
                            tincidunt vulputate libero, nec imperdiet sapien pulvinar id.
                            Nullam scelerisque odio vel lacus faucibus, tincidunt feugiat
                            augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                            lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue
                            sem finibus eleifend egestas eu metus. Sed ut dolor id magna
                            rutrum ultrices ut eget libero. Duis vel porttitor odio. Ut
                            pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
                            dignissim malesuada, lacus lorem commodo leo, tristique blandit
                            ante mi id metus. Integer et vehicula leo, vitae interdum lectus.
                            Praesent nulla purus, commodo at euismod nec, blandit ultrices
                            erat. Aliquam eros ipsum, interdum et mattis vitae, faucibus vitae
                            justo. Nulla condimentum hendrerit leo, in feugiat ipsum
                            condimentum ac. Maecenas sed blandit dolor.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About