"use client"
import React from 'react';
import MainWrapper from '@/components/MainWarpper';
import ArticleList from '@/components/helpDesk/articles/ArticleList';

const Articles: React.FC = () => {

    return (
        <MainWrapper>
            <div className='lg:mx-16 max-md:px-3 max-md:mt-12'>
            <ArticleList/>        
            </div>
    </MainWrapper>
    );
};

export default Articles;
