"use client"
import React, { useState } from 'react';
import WorkspaceNav from "../../components/WorkspaceNav";
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Homework from '../../components/Homework';
import Notes from '../../components/Notes';
import Bookings from '../../components/Bookings';
import MainWrapper from '@/components/MainWarpper';

const Workspace: React.FC = () => {
    const [activeTab, setActiveTab] = useState('homework');

    const handleTabSelect = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <MainWrapper>
        <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col bg-gray-100 mt-16 lg:mt-0">    
            <div className="p-4 md:p-8 lg:p-4">
                <WorkspaceNav onTabSelect={handleTabSelect} /> 
                <div className="mt-8">
                    {activeTab === 'homework' && <Homework />}
                    {activeTab === 'notes' && <Notes />}
                    {activeTab === 'bookings' && <Bookings />}
                </div>
            </div>
        </div>
    </div>
    </MainWrapper>

    
    );
};
export default Workspace;