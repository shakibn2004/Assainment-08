'use client'
import Home from '@/Components/Home';
import LearningTips from '@/Components/LearningTips';
import PopularCourses from '@/Components/PopularCourses';
import TopInstructor from '@/Components/TopInstructor';
import React from 'react';

const MainPage = () => {
    return (
        <div>
            <Home />
            <PopularCourses />
            <LearningTips />
            <TopInstructor />
        </div>
    );
};

export default MainPage;