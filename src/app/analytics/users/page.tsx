"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import SocialAnalytics from '@/components/analytics/SocialAnalytics';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <SocialAnalytics/>        
    </MainWrapper>
    );
};

export default Message;
