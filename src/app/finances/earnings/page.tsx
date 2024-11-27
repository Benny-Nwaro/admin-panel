'use client';
import React from 'react';
import Earnings from '@/components/Earnings';
import MainWrapper from '@/components/MainWarpper';


const FinancesPage: React.FC = () => {
    return (
        <MainWrapper>
        <div className="flex">
            <div className="flex-1">
                <div className="p-6">
                    <Earnings />
                </div>

            </div>
        </div>
        </MainWrapper>
   
    );
};

export default FinancesPage;