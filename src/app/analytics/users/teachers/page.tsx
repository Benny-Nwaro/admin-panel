"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Dashboard from '@/components/analytics/users/teachers/Dashboard';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <Dashboard/>        
    </MainWrapper>
    );
};

export default Message;
