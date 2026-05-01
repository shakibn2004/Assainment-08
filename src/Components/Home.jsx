import { Syne } from 'next/font/google';
import React from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const syne = Syne({
    subsets: ['latin'],
    display: 'swap', // Prevents layout shift
})

const Home = () => {
    return (
        <section>
            <section className='w-[90%] max-w-360 mx-auto flex gap-4 justify-between items-center text-white py-20' >
                <div className="hero-start space-y-10">
                    <div className="batch uppercase border border-[#f97316]/50 w-fit px-4 py-2 rounded-full">
                        <h1 className='text-[#f97316] text-[14px]'>A Reliable Platform for Tech Skills</h1>
                    </div>

                    <h1 className={`text-[5rem] leading-20 font-black ${syne.className}`}>
                        Upgrade <br /> Your <span className='linear-color'>Skills</span> <br />
                        Today.
                    </h1>

                    <p className='text-[#8a8799] text-xl'>Learn from industry experts. Master Web Dev, Design, <br /> Marketing, AI and more — at your own pace, on your terms.</p>

                    <div className="buttons flex gap-3">
                        <button className='btn-primary'>Explore Course</button>
                        <button className='border border-[#8a8799]/50 text-[#8a8799] px-4 py-2 flex gap-2 items-center rounded-xl'>Watch Demo<FaPlay /></button>
                    </div>

                    <div className={`${syne.className} ratting grid grid-cols-3 w-fit gap-4`}>
                        <div className="card">
                            <h3 className='text-3xl font-bold -mb-2'>12<span className='text-[#f97316]'>K+</span></h3>
                            <p className='text-[14px] text-[#8a8799]'>STUDENTS</p>
                        </div>
                        <div className="card">
                            <h3 className='text-3xl font-bold -mb-2'>48<span className='text-[#f97316]'>+</span></h3>
                            <p className='text-[14px] text-[#8a8799]'>COURSES</p>
                        </div>
                        <div className="card">
                            <h3 className='text-3xl font-bold -mb-2 flex items-center'>4.9<span className='text-[#f97316]'><IoIosStar /></span></h3>
                            <p className='text-[14px] text-[#8a8799]'>AVG RATTING</p>
                        </div>
                    </div>
                </div>


                <div className="hero-end shadow-[0_0_2px_#8a8799] border-t-2 border-[#f97316] p-6 rounded-2xl">
                    <div className="image bg-1 w-90 h-40 rounded-xl flex items-center justify-center text-5xl">🖥️</div>

                    <div className="content hidden md:block mt-5 space-y-3">
                        <h4 className='text-[14px] text-[#f97316]'>DEVELOPMENT</h4>
                        <h2 className={`${syne.className} text-[18px] font-bold`}>Complete Web Dev Bootcamp</h2>
                        <p className='text-[#8a8799]'>by Programming Hero</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;