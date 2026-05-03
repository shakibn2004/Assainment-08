'use client'
import { authClient } from '@/lib/auth-client';
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { Slide, toast } from 'react-toastify';

const syne = Syne({
    subsets: ['latin'],
    display: 'swap', // Prevents layout shift
})

const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "My Profile", path: "/profile" }
];
const Navbar = () => {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const user = session?.user;

    // Handle Logout
    const handleLogout = async () => {
        await authClient.signOut();
        toast.warning("You are logout!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        })
    };


    return (
        <div className='bg-black sticky top-0 z-10'>
            <header className='flex justify-between max-w-360 w-[90%] mx-auto items-center py-4'>
                {/* Logo */}
                <Link href={'/'}>
                    <nav className={`nav-start font-black text-[1.35rem] space-x-2 ${syne.className}`}>
                        <span className='text-white'>Skill</span>
                        <span className='linear-color'>Sphere</span>
                    </nav>
                </Link>


                {/* Middle navigation links */}
                <nav className='hidden lg:flex list-none font font gap-8 text-[#8a8799]'>
                    {links.map(link => (
                        <li key={link.name}>
                            <Link
                                href={user ? link.path : (link.path === "/profile" ? `/auth/signin?redirect=${encodeURIComponent("/profile")}` : link.path)}
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

                {/* Menu Button for tablet */}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="hidden md:block lg:hidden text-white text-2xl font-bold w-10 h-10 items-center justify-center">
                    {menuOpen ? "✕" : <IoMenu />}
                </button>

                {/* Navbar end show user image and name */}
                <nav>
                    <div className="user hidden md:flex gap-4 items-center">
                        {/* user image here */}
                        {user ? <h1 className={`linear-color font-bold ${syne.className}`}><span className='text-xl font-extrabold'>Hello! </span>{user.name}</h1> : ""}
                        <Link href={'/profile'} className={`${user ? 'block' : 'hidden'}`}>
                            <div className='w-10 h-10 rounded-full border-2 border-[#f97316] overflow-hidden'>
                                <Image src={`${user ? (user.image ? user.image : '/boy.png') : "/boy.png"}`} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='User Avatar' />
                            </div>
                        </Link>
                        <div className="div">
                            {
                                user ? (
                                    <Link onClick={handleLogout} href={'/'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'><RiLogoutCircleLine />Logout</Link>
                                ) : (
                                    <div className='flex gap-4'>
                                        <Link href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'>Login<RiLoginCircleLine /></Link>
                                        <Link href={'/auth/signup'} className='btn-primary'>Register</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Mobile Burger */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-2xl font-bold w-10 h-10 flex items-center justify-center">
                        {menuOpen ? "✕" : <IoMenu />}
                    </button>
                </nav>


                {/* Mobile Menu */}
                <div className={`fixed top-15 left-0 right-0 pb-5 z-40 lg:hidden bg-black border-b border-accent/10 transition-all duration-300
                                        ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {
                            user ? (
                                <div className='flex gap-4 border border-[#8a8797]/50 md:hidden ml-auto w-full px-5 py-2 rounded justify-between items-center'>
                                    <h1 className={`linear-color font-bold ${syne.className}`}><span className='text-xl font-extrabold'>Hello!</span> {user.name}</h1>
                                    <Link href={'/profile'} className={`${user ? 'block' : 'hidden'}`}>
                                        <div className='w-10 h-10 rounded-full border-2 border-[#f97316] overflow-hidden'>
                                            <Image src={`${user ? (user.image ? user.image : '/boy.png') : "/boy.png"}`} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='User Avatar' />
                                        </div>
                                    </Link>
                                </div>
                            ) : ('')
                        }
                        {links.map((link, idx) => (
                            <Link key={idx}
                                href={link.path}
                                className={`font-medium ${pathname === link.path
                                    ? "text-white underline decoration-[#f97316] underline-offset-4 decoration-2"
                                    : "hover:text-white text-[#8a8799]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {
                            user ? (
                                <div>
                                    <Link onClick={handleLogout} href={'/'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex md:hidden gap-1 items-center justify-center'><RiLogoutCircleLine />Logout</Link>
                                </div>
                            ) : (
                                <div className='flex md:hidden mt-5 gap-4'>
                                    <Link href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'>Login<RiLoginCircleLine /></Link>
                                    <Link href={'/auth/signup'} className='btn-primary'>Register</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </header>
        </div >

    );
};

export default Navbar;



{/* <a href="https://ibb.co.com/9HRwwhTq"><img src="https://i.ibb.co.com/b5pHHFBr/Profissional-image.png" alt="Profissional-image" border="0"></a> */ }