import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='grow'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default layout;