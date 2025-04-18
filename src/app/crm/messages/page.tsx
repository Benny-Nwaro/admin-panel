"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatLayout from '@/components/crm/messages/ChatLayout';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className="lg:flex-1 bg-white shadow-lg lg:mx-16 h-full rounded-lg max-md:overflow-y-scroll lg:p-4">
                <ChatLayout />
            </div>
    </MainWrapper>
    );
};

export default Message;
