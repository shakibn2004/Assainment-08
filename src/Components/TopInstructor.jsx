import { Syne } from 'next/font/google';
import React from 'react';
import { IoIosStar } from 'react-icons/io';


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})

const TopInstructor = () => {
    return (
        <section className='text-white w-[90%] max-w-360 mx-auto py-20 space-y-3'>
            <div className="top">
                <h1 className={`${syne.className} text-5xl font-black`}>Top Instructors</h1>
            </div>

            <div className="middle">
                Learn from world-class professionals with years of real-world experience.
            </div>

            <div className="bottom-cards mt-8 grid grid-cols-5 gap-4">
                <div className="card-1 flex flex-col items-center px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon border-2 border-[#f97316] bg-[#f973163a] w-20 h-20 p-3 rounded-full grid place-content-center text-3xl">👨🏻‍💻</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>John Doe</h4>
                    <h5 className='text-[#f97316]'>Full-Stack Developer</h5>

                    <div className={`${syne.className} ratting grid grid-cols-3 w-fit gap-4 text-center`}>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2 flex items-center'>4.9<span className='text-[#f97316]'><IoIosStar /></span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Rating</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>3.2K</h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Course</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>8<span className='text-[#f97316]'>+</span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Student</p>
                        </div>
                    </div>
                </div>
                <div className="card-1 flex flex-col items-center px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon border-2 border-[#f97316] bg-[#f973163a] w-20 h-20 p-3 rounded-full grid place-content-center text-3xl">👨🏼‍🎨</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Sarah Chen</h4>
                    <h5 className='text-[#f97316]'>UI/UX Lead Designer</h5>

                    <div className={`${syne.className} ratting grid grid-cols-3 w-fit gap-4 text-center`}>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2 flex items-center'>4.8<span className='text-[#f97316]'><IoIosStar /></span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Rating</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>2.8K</h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Course</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>6<span className='text-[#f97316]'>+</span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Student</p>
                        </div>
                    </div>
                </div>
                <div className="card-1 flex flex-col items-center px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon border-2 border-[#f97316] bg-[#f973163a] w-20 h-20 p-3 rounded-full grid place-content-center text-3xl">🩺</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Dr. Marcus Reid</h4>
                    <h5 className='text-[#f97316]'>Data Scientist & AI</h5>

                    <div className={`${syne.className} ratting grid grid-cols-3 w-fit gap-4 text-center`}>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2 flex items-center'>4.9<span className='text-[#f97316]'><IoIosStar /></span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Rating</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>4.1K</h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Course</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>5<span className='text-[#f97316]'>+</span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Student</p>
                        </div>
                    </div>
                </div>
                <div className="card-1 flex flex-col items-center px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon border-2 border-[#f97316] bg-[#f973163a] w-20 h-20 p-3 rounded-full grid place-content-center text-3xl">📱</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Priya Nair</h4>
                    <h5 className='text-[#f97316]'>Mobile App Developer</h5>

                    <div className={`${syne.className} ratting grid grid-cols-3 w-fit gap-4 text-center`}>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2 flex items-center'>4.7<span className='text-[#f97316]'><IoIosStar /></span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Rating</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>1.9K</h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Course</p>
                        </div>
                        <div className="card">
                            <h3 className='text-[1rem] font-bold -mb-2'>4<span className='text-[#f97316]'>+</span></h3>
                            <p className='text-[.7rem] capitalize text-[#8a8799]'>Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopInstructor;