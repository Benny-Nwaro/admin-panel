"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Sales from '@/components/analytics/Sales';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <Sales/>        
    </MainWrapper>
    );
};

export default Message;
