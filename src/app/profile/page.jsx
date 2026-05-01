'use client'
import Navbar from '@/Components/Navbar';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const Profile = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='text-white'>
            {
                user ? <h1>Wellcome Mr.{user.name}</h1> : <Link href={'/auth/signin'}>Login</Link>
            }

        </div>
    );
};

export default Profile;