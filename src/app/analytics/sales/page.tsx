"use client"
import React, { useState } from 'react';
import MainWrapper from '@/components/MainWarpper';
import Charts from '@/components/analytics/Charts';
import KPISection from '@/components/analytics/KPISection';
import Home from '@/components/analytics/Home';
import Sales from '@/components/analytics/Sales';
import RecentSales from '@/components/analytics/RecentSales';

const Message: React.FC = () => {

    return (
        <MainWrapper>
            <Sales/>        
    </MainWrapper>
    );
};

export default Message;
