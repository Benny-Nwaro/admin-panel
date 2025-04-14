"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import SocialAnalytics from '@/components/analytics/SocialAnalytics';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-16'>
            <SocialAnalytics/>        
            </div>
    </MainWrapper>
    );
};

export default Message;
