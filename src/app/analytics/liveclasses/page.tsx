"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import LiveClassesAnalytics from '@/components/analytics/LiveClassesAnalytics';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <LiveClassesAnalytics/>        
    </MainWrapper>
    );
};

export default Message;
