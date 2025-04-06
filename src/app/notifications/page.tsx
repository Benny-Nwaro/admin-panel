"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Notifications from '@/components/notification/Notifications';

const notifications: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-12'>
            <Notifications/>        
            </div>
    </MainWrapper>
    );
};

export default notifications;
