"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Courses from '@/components/cms/courses/Courses';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:px-10 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <Courses />
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
