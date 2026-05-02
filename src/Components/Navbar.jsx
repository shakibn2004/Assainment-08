'use client'
import { authClient } from '@/lib/auth-client';
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";

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
    const user = session?.user;
    console.log(user);

    return (
        <div className='bg-black sticky top-0 z-10'>
            <header className='flex justify-between max-w-360 w-[90%] mx-auto items-center py-4'>
                <Link href={'/'}>
                    <nav className={`nav-start font-black text-[1.35rem] space-x-2 ${syne.className}`}>
                        <span className='text-white'>Skill</span>
                        <span className='linear-color'>Sphere</span>
                    </nav>
                </Link>

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
                        {user ? <h1 className={`linear-color font-bold ${syne.className}`}>Hello! {user.name}</h1> : ""}
                        <Link href={'/profile'} className={`${user ? 'block' : 'hidden'}`}>
                            <div className='w-10 h-10 rounded-full border-2 border-[#f97316] overflow-hidden'>
                                <Image src={`${user ? (user.image ? user.image : '/boy.png') : "/boy.png"}`} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='User Avatar' />
                            </div>
                        </Link>
                        <div className="div">
                            {
                                user ? (
                                    <Link onClick={async () => { await authClient.signOut() }} href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'><RiLogoutCircleLine />Logout</Link>
                                ) : (
                                    <div className='flex gap-4'>
                                        <Link href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'>Login<RiLoginCircleLine /></Link>
                                        <Link href={'/auth/signup'} className='btn-primary'>Register</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </div >

    );
};

export default Navbar;



{/* <a href="https://ibb.co.com/9HRwwhTq"><img src="https://i.ibb.co.com/b5pHHFBr/Profissional-image.png" alt="Profissional-image" border="0"></a> */}