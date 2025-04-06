"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import MessageList from '@/components/messages/AllMessages';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <MessageList />
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
