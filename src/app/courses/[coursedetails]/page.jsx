import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'animate.css';


const coursedetails = async ({ params }) => {
    let courses = [];
    try {
        const res = await fetch('https://data-fetching-sable-two.vercel.app/assainment-08.json');
        if (res.ok) {
            courses = await res.json();
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    const courseIdObj = await params;
    const courseId = parseInt(courseIdObj.coursedetails)
    const sliceCourse = courses.find(course => course.id === courseId);

    // Get user login status
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;



    return (
        <div>
            {
                user ? (
                    <div className='text-white grid md:grid-cols-[2fr_3fr] w-[90%] max-w-360 mx-auto p-4 md:p-12 gap-10' >

                        <div className="left animate__animated animate__fadeInUp shadow-[0_0_2px_white] rounded-t-2xl rounded-b">
                            <div className="img rounded-t-2xl">
                                <Image className='rounded-t-2xl' src={sliceCourse.image} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='Course Image'></Image>
                            </div>

                            <div className='p-6'>
                                <h4 className="font-bold text-[1.25rem] my-2">{sliceCourse.title}</h4>
                                <div className="price font-bold text-[2.25rem] text-[#f97316]">
                                    ${sliceCourse.price}
                                </div>
                                <button className='px-4 py-2 rounded-xl w-full text-xl linear-bg mt-4'>Enrolled Now</button>
                                <div className="content mt-8">
                                    <h1 className='text-[#d2d2d2] text-[1.2rem] font-bold'>What You Will get?</h1>
                                    <ul className='flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between py-4 text-[#8a8797] text-[1.1rem]'>
                                        <ul>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>2 days crash course</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Expart guidline</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Live class</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Certificate</li>
                                        </ul>
                                        <ul>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Support seasion</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Q&A Service</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Recording class</li>
                                            <li className='flex items-center gap-1 leading-0.5'><span className='text-5xl leading-8'>·</span>Job placement</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="right animate__animated animate__fadeInTopRight">
                            <h1 className='text-[clamp(1rem,5vw,2rem)] font-black'>AI based Web Development: <br /> Python with Claude Code</h1>
                            <p className='text-[#8a8797] mt-6'>If you are a complete beginner and want to start web development with Python, then this 2-day Django + React + AI workshop is for you. In this workshop, you will learn how to build a backend using Python, how to create a frontend with React, and how to use AI to speed up development.

                                You won’t become a pro in just 2 days, but you will gain a clear roadmap for building a complete web application. This can be the perfect starting point for your journey as a Python developer.</p>
                            <h2 className='text-3xl font-bold mt-8'>Study Plan</h2>
                            <div className='mt-4'>
                                <h3 className='font-bold text-white/70 text-[1.125rem]'>Live Class 1: Web Development Foundations + AI Workflow (Claude Code)

                                    Topics:</h3>
                                <p className='text-[#8a8797]'>Full Stack Development Overview (Frontend, Backend, Database) | How Web Apps Work (Client-Server) | Career Paths & Salary Insight (BD + Remote) | Python for Backend (Basics + Why Python) | Django Intro (MVT) | React Overview | Full Stack Workflow (Idea → API → Frontend → Deploy) |</p>
                                <h2 className='mt-3 text-[#8a8797]'>
                                    <span className='text-white/70 text-[1.125rem] font-bold'>AI Workflow (Claude Code):</span> Prompt Engineering Basics | Claude দিয়ে Code Generate | Debugging & Optimization with AI | Tools Setup (VS Code, Python, Git, GitHub) | API Basics (REST, Request, Response) | Django Basics (Models, Views, URLs)
                                </h2>
                                <p className='text-2xl mt-6 mb-2 font-bold'>Project</p>
                                <h3 className='font-bold text-[1.125rem] text-[#8a8797]'>AI-assisted Smart Task Manager (Claude Code + Django + React)</h3>
                            </div>
                        </div>


                    </div >
                ) : (
                    <div className='flex flex-col items-center gap-4 py-20'>
                        <p className='text-3xl font-bold text-center linear-color'>Please login to show course details</p>
                        <Link className='btn-primary w-fit' href={'/auth/signin'}>Login</Link>
                    </div>
                )
            }


        </div>
    );
};

export default coursedetails;