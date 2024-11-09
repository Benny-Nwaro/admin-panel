'use client';
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Earnings from '@/components/Earnings';

const FinancesPage: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-6">

                    <Earnings />
                </div>

            </div>
        </div>
    );
};

export default FinancesPage;