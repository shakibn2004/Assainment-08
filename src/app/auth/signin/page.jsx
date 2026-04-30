import Link from 'next/link';

const SignInPage = () => {
    return (
        <div>
            <h1>This is sign in page</h1>
            <Link href={'/home'} className='btn-primary'>Return to Home</Link>

        </div>
    );
};

export default SignInPage;