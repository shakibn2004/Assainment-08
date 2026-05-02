import React from 'react';

const DataFetching = async () => {
    let courses = [];
    try {
        const res = await fetch('https://assainment-08.vercel.app/course.json');
        if (res.ok) {
            courses = await res.json();
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    return (
        <div>
            
        </div>
    );
};

export default DataFetching;