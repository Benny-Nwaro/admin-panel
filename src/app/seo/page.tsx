"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import SEO from '@/components/seo/SEO';

const notifications: React.FC = () => {

    return (
        <div>
            <MainWrapper> 
                <div className='lg:mx-16'>
                <SEO/>        
                </div>         
            </MainWrapper>
        </div>
    );
};

export default notifications;
