"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import StudentsTable from '@/components/users/students/StudentsTable';
import StudentProfile from '@/components/users/students/StudentProfile';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:px-10 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <StudentProfile />
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
