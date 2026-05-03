import { Syne } from 'next/font/google';
import React from 'react';

const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})

const NewReleases = () => {
    return (
        <section className='text-white w-[90%] max-w-360 mx-auto py-10 md:py-20 space-y-3'>
            <div className="top">
                <h1 className={`${syne.className} text-[clamp(1.5rem,5vw,3rem)] font-black`}>New Releases</h1>
            </div>

            <div className="middle">
                <p className='text-[#8a8797]'>The freshest courses just added to SkillSphere.</p>
            </div>

            <div className="bottom-cards mt-10 w-full justify-center grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-1 w-fit flex gap-4 shadow-[0_0_2px_#fff]/50 p-4 rounded items-center justify-center">
                    <div className={`left ${syne.className} text-[2rem] font-black text-[#f97316]/40`}>
                        <h1>01</h1>
                    </div>

                    <div className="middle space-y-2">
                        <h1 className='text-[0.9rem] flex items-center gap-3'>Next.js 15 Full Course<span className='text-[#f97316]/90 border border-[#f97316]/40 rounded px-1 py-0.5'>NEW</span></h1>
                        <p className='text-[0.75rem] text-[#8a8799]'>John Doe · 22h · <span>⭐</span> 5.0</p>
                    </div>
                </div>
                <div className="card-1 w-fit flex gap-4 shadow-[0_0_2px_#fff]/50 p-4 rounded items-center justify-center">
                    <div className={`left ${syne.className} text-[2rem] font-black text-[#f97316]/40`}>
                        <h1>02</h1>
                    </div>

                    <div className="middle space-y-2">
                        <h1 className='text-[0.9rem] flex items-center gap-3'>AI Prompt Engineering<span className='text-[#f97316]/90 border border-[#f97316]/40 rounded px-1 py-0.5'>NEW</span></h1>
                        <p className='text-[0.75rem] text-[#8a8799]'>Dr. Marcus Reid · 10h  <span>⭐</span> 4.9</p>
                    </div>
                </div>
                <div className="card-1 w-fit flex gap-4 shadow-[0_0_2px_#fff]/50 p-4 rounded items-center justify-center">
                    <div className={`left ${syne.className} text-[2rem] font-black text-[#f97316]/40`}>
                        <h1>03</h1>
                    </div>

                    <div className="middle space-y-2">
                        <h1 className='text-[0.9rem] flex items-center gap-3'>Sarah Chen · 12h<span className='text-[#f97316]/90 border border-[#f97316]/40 rounded px-1 py-0.5'>NEW</span></h1>
                        <p className='text-[0.75rem] text-[#8a8799]'>Sarah Chen · 12h <span>⭐</span> 4.8</p>
                    </div>
                </div>
                <div className="card-1 w-fit flex gap-4 shadow-[0_0_2px_#fff]/50 p-4 rounded items-center justify-center">
                    <div className={`left ${syne.className} text-[2rem] font-black text-[#f97316]/40`}>
                        <h1>04</h1>
                    </div>

                    <div className="middle space-y-2">
                        <h1 className='text-[0.9rem] flex items-center gap-3'>React Native Deep Dive<span className='text-[#f97316]/90 border border-[#f97316]/40 rounded px-1 py-0.5'>NEW</span></h1>
                        <p className='text-[0.75rem] text-[#8a8799]'>Priya Nair · 18h · ⭐ 4.7 <span>⭐</span> 4.7</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewReleases;