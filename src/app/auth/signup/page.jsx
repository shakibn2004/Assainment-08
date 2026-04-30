import Link from 'next/link';

const SignUpPage = () => {
    return (
        <div>
            <h1>This signup page</h1>
            <Link href={'/home'} className='btn-primary'>Return to Home</Link>

        </div>
    );
};

export default SignUpPage;