"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatLayout from '@/components/crm/sms/ChatLayout';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className="flex-1 bg-white max-md:mt-12  lg:mx-16 h-full shadow-md rounded-lg">
                <ChatLayout />
            </div>
    </MainWrapper>
    );
};

export default Message;
