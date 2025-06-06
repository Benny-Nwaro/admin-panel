"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import TrashPage2 from '@/components/TrashPage2';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-16 max-md:px-3 max-md:mt-12'>
            <TrashPage2/>        
            </div>
    </MainWrapper>
    );
};

export default Message;
