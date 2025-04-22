"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import FAQPage from '@/components/helpDesk/FAQPage';

const Help: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-16 max-md:px-3 max-md:mt-12'>
            <FAQPage/>        
            </div>
    </MainWrapper>
    );
};

export default Help;
