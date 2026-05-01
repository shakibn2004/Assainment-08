import Home from '@/Components/Home';
import LearningTips from '@/Components/LearningTips';
import PopularCourses from '@/Components/PopularCourses';
import React from 'react';

const MainPage = () => {
    return (
        <div>
            <Home />
            <PopularCourses />
            <LearningTips />
        </div>
    );
};

export default MainPage;