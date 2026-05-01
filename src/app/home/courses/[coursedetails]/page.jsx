import React from 'react';

const coursedetails = async ({ params }) => {
    const paramsObj = await params;
    const courseId = paramsObj.coursedetails.split('-');
    console.log(courseId[1]);

    return (
        <div className='text-white'>
            this is course details page
        </div>
    );
};

export default coursedetails;