"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import SocialAnalytics from '@/components/analytics/SocialAnalytics';
import TrashPage from '@/components/TrashPage';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <TrashPage/>        
    </MainWrapper>
    );
};

export default Message;
