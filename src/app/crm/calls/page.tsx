"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Calls from '@/components/crm/calls/Calls';

const Message: React.FC = () => {

    return (
        <MainWrapper>
        <div className="flex flex-col lg:flex-row gap-4 pt-10 lg:mx-16 ">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
                <Calls />
            </div>
        </div>
    </MainWrapper>
    );
};

export default Message;
