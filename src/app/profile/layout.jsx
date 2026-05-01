'use client'
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React, { Children } from 'react';

const layout = ({Children}) => {
    return (
        <div>
            <Navbar />
            {Children}
            <Footer />
        </div>
    );
};

export default layout;