import { Syne } from 'next/font/google';
import React from 'react';


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})

const LearningTips = () => {
    return (
        <section className='text-white w-[90%] max-w-360 mx-auto py-20 space-y-3'>
            <div className="top">
                <h1 className={`${syne.className} text-5xl font-black`}>Learning Tips</h1>
            </div>

            <div className="middle">
                Proven techniques to help you learn faster and retain more.
            </div>

            <div className="bottom-cards mt-4 grid grid-cols-5 gap-4">
                <div className="card-b px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon bg-[#f97316]/30 w-15 h-15 p-4 rounded-2xl text-center text-2xl">⏰</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Pomodoro Technique</h4>
                    <p className='text-[.85rem] text-[#8a8799]'>Study in 25-minute focused bursts, then take a 5-minute break. After 4 sessions, take a longer 15–30 min rest.</p>
                </div>
                <div className="card-b px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon bg-[#a855f7]/30 w-15 h-15 p-4 rounded-2xl text-center text-2xl">🧠</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Active Recall</h4>
                    <p className='text-[.85rem] text-[#8a8799]'>Test yourself without looking at notes. Retrieval practice is far more effective than re-reading material.</p>
                </div>
                <div className="card-b px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon bg-[#22c55e]/30 w-15 h-15 p-4 rounded-2xl text-center text-2xl">🗂️</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Spaced Repetition</h4>
                    <p className='text-[.85rem] text-[#8a8799]'>Review material at increasing intervals over time. This exploits the spacing effect for long-term retention.</p>
                </div>
                <div className="card-b px-4 py-6 shadow-[0_0_2px_#fff]/50 border border-[#f97316]/20 hover:border hover:border-[#f97316]/50">
                    <div className="icon bg-[#3b82f6]/30 w-15 h-15 p-4 rounded-2xl text-center text-2xl">📆</div>
                    <h4 className={`${syne.className} font-bold text-[1rem]`}>Time Blocking</h4>
                    <p className='text-[.85rem] text-[#8a8799]'>Assign dedicated calendar blocks for learning. Treat them like non-negotiable appointments with yourself.</p>
                </div>
            </div>
        </section>
    );
};

export default LearningTips;