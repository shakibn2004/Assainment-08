import Navbar from '@/Components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;