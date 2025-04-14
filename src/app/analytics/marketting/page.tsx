"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Home from '@/components/analytics/Home';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className='max-md:mt-16'>
            <Home/> 
            </div>
    </MainWrapper>
    );
};

export default Message;
