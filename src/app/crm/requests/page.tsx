"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatLayout from '@/components/crm/request/ChatLayout';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className="flex-1 h-full bg-white mx-16 shadow-lg rounded-lg p-4">
                <ChatLayout />
            </div>
        
    </MainWrapper>
    );
};

export default Message;
