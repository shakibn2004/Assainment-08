import { Syne } from 'next/font/google';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPlay } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const syne = Syne({
    subsets: ['latin'],
    display: 'swap', // Prevents layout shift
})

const Footer = () => {
    return (
        <div className='grid   md:grid-cols-[2fr_4fr] gap-10 w-[90%] max-w-360 mx-auto py-10 md:py-15'>
            <footer>
                <nav className={`nav-start font-black text-[1.35rem] space-x-2 mt-5 ${syne.className}`}>
                    <span className='text-white'>Skill</span>
                    <span className='linear-color'>Sphere</span>
                </nav>
                <p className='text-[#8a8799] text-[0.875rem] mt-4'>Your one-stop destination for skill-based <br /> learning. From web development to design <br /> — grow your career with expert-led <br /> courses.</p>
                <div className="socials flex gap-4 mt-5 text-[#8a8799]">
                    <div className="social border border-[#8a8799]/50 cursor-pointer hover:border-[#f97316] p-3 rounded-xl ">
                        <FaXTwitter />
                    </div>
                    <div className="social border border-[#8a8799]/50 cursor-pointer hover:border-[#f97316] p-3 rounded-xl">
                        <FaLinkedinIn />
                    </div>
                    <div className="social border border-[#8a8799]/50 cursor-pointer hover:border-[#f97316] p-3 rounded-xl">
                        <FaPlay />
                    </div>
                    <div className="social border border-[#8a8799]/50 cursor-pointer hover:border-[#f97316] p-3 rounded-xl">
                        <FaFacebookF />
                    </div>
                </div>
            </footer>

            <footer className="footer grid grid-cols-2 sm:grid-cols-3 place-content-around text-neutral-content md:p-6">
                <nav>
                    <h6 className="footer-title">Platform</h6>
                    <a className="link link-hover">All Courses</a>
                    <a className="link link-hover">Instructors</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Enterprise</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Career</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Refund Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <p className='text-[#8a8799]'>reachme@skillsphere.dev</p>
                    <p className='text-[#8a8799]'>+880 96387823541</p>
                </nav>
            </footer>
            <p className='text-[#8a8799]  md:mt-40'>© 2026 SkillSphere. All rights reserved.</p>
        </div>
    );
};

export default Footer;