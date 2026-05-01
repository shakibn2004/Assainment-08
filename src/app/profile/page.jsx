import { Syne } from 'next/font/google';
import React from 'react';
import { IoIosStar } from 'react-icons/io';


const syne = Syne({
    subsets: ['latin'],
    display: 'swap',
})

const Profile = () => {
    return (
        <section className='text-white w-[90%] max-w-360 mx-auto py-20 space-y-3'>
            <div className="top">
                <h1 className={`${syne.className} text-5xl font-black`}>My Profile</h1>
            </div>

            <div className="middle">
                View and manage your learning progress and account details.
            </div>

        </section>
    );
};

export default Profile;
// user ? <h1>Wellcome Mr.{user.name}</h1> : <Link href={'/auth/signin'}>Login</Link>