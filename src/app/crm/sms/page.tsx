"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import ChatComponent from '@/components/messages/MessageBox';
import MessageList from '@/components/messages/AllMessages';
import PaymentDisplay from '@/components/messages/PaymentDisplay';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:px-10 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <MessageList />
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
