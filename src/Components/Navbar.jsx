'use client'
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const syne = Syne({
    subsets: ['latin'],
    display: 'swap', // Prevents layout shift
})

const links = [
    { name: "Home", path: "/home" },
    { name: "Courses", path: "/home/courses" },
    { name: "My Profile", path: "/home/profile" }
];
const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='bg-black sticky top-0'>
            <header className='flex justify-between max-w-360 w-[90%] mx-auto items-center py-4'>
                <nav className={`nav-start font-black text-[1.35rem] space-x-2 ${syne.className}`}>
                    <span className='text-white'>Skill</span>
                    <span className='linear-color'>Sphere</span>
                </nav>

                <nav className='flex list-none font font gap-8 text-[#8a8799]'>
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                href={link.path}
                                className={`font-medium ${pathname === link.path
                                    ? "text-white underline decoration-[#f97316] underline-offset-4 decoration-2"
                                    : "hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </nav>

                <nav>
                    <div className="user flex gap-4 items-center">
                        {/* user image here */}
                        <div className='w-10 h-10 rounded-full border-2 border-[#f97316] overflow-hidden'>
                            <Image src={'/boy.png'} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='User Avatar' />
                        </div>
                        <Link href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium'>Login</Link>
                        <Link href={'/auth/signup'} className='btn-primary'>Register</Link>
                    </div>
                </nav>
            </header>
        </div>

    );
};

export default Navbar;