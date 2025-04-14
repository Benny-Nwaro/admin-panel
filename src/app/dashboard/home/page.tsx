"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import Dashboard from '@/components/Dashboard';
import Home from '@/app/page';

const dashboard: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-12 max-md:mx-3'>
            <Home/>        
            </div>
    </MainWrapper>
    );
};

export default dashboard;
