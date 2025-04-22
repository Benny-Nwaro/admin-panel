"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import PromotionsTable from '@/components/promotions/PromotionsTable';

const Promotions: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-16 max-md:px-3 max-md:mt-12'>
            <PromotionsTable/>        
            </div>
    </MainWrapper>
    );
};

export default Promotions;
