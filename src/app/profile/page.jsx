'use client'
import { authClient } from '@/lib/auth-client';
import { Syne } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { RiLogoutCircleLine } from 'react-icons/ri';
import 'animate.css';



const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})

const Profile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;


    return (
        <section className='text-white animate__fadeInTopLeft animate__animated w-[90%] max-w-360 mx-auto py-20 space-y-3'>



            {user ? (
                <div>
                    <div className="top">
                        <h1 className={`${syne.className} text-5xl font-black`}>My Profile</h1>
                    </div>

                    <div className="middle text-[#8a8799]">
                        View and manage your learning progress and account details.
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='w-fit space-y-6 mt-13'>

                            <div className='profile-card-top flex items-center gap-6'>
                                <div className='w-20 h-20 linear-bg rounded-full flex overflow-hidden items-center justify-center'>
                                    <Image src={`${user ? (user.image ? user.image : '/boy.png') : "/boy.png"}`} width={0} height={0} sizes='100vw' style={{ width: '100%', height: '100%' }} alt='User Avatar' />
                                </div>
                            </div>

                            <div className="profile-card-middle flex gap-4">
                                <Link href='/profile/update' className='btn-primary'>Upadate Profile</Link>
                                <Link onClick={async () => { await authClient.signOut() }} href={'/auth/signin'} className='text-[#8a8799] border border-[#8a8799]/50 rounded-xl px-4 py-2 font-medium flex gap-1 items-center'><RiLogoutCircleLine />Logout</Link>
                            </div>

                            <div className="profile-botom grid grid-cols-3 gap-4">
                                <div className="card-1 flex flex-col items-center px-4 py-3 rounded-xl border border-[#8a8799] justify-center">
                                    <h2 className={`${syne.className} font-bold text-2xl text-[#f97316]`}>5</h2>
                                    <p className='text-[.7rem] text-[#8a8799]'>Enrolled</p>
                                </div>
                                <div className="card-1 flex flex-col items-center px-4 py-3 rounded-xl border border-[#8a8799] justify-center">
                                    <h2 className={`${syne.className} font-bold text-2xl text-[#f97316]`}>2</h2>
                                    <p className='text-[.7rem] text-[#8a8799]'>completed</p>
                                </div>
                                <div className="card-1 flex flex-col items-center px-4 py-3 rounded-xl border border-[#8a8799] justify-center">
                                    <h2 className={`${syne.className} font-bold text-2xl text-[#f97316]`}>48h</h2>
                                    <p className='text-[.7rem] text-[#8a8799]'>Time Spend</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-3xl font-bold linear-color'>Please login</p>
                    <Link className='btn-primary w-fit' href={'/auth/signin'}>Login</Link>
                </div>
            )}
        </section>
    );
};

export default Profile;
