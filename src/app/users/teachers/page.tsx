"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatComponent from '@/components/messages/MessageBox';
import MessageList from '@/components/messages/AllMessages';
import PaymentDisplay from '@/components/messages/PaymentDisplay';
import CreateNewTeacher from '@/components/users/teachers/CreateNewTeacher';
import TeachersPending from '@/components/users/teachers/TeachersPending';
import Teacher from '@/components/users/teachers/Teacher';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:px-10 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <Teacher/>
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
