"use client"
import React, { useState } from 'react';
import WorkspaceNav from "../../components/WorkspaceNav";
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Homework from '../../components/Homework';
import Notes from '../../components/Notes';
import Bookings from '../../components/Bookings';

const Workspace: React.FC = () => {
    const [activeTab, setActiveTab] = useState('homework');

    const handleTabSelect = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col bg-gray-100">
                <Header />
                <div>
                    <WorkspaceNav onTabSelect={handleTabSelect} />
                    {activeTab === 'homework' && <Homework />}
                    {activeTab === 'notes' && <Notes />}
                    {activeTab === 'bookings' && <Bookings />}
                </div>
            </div>
        </div>
    );
};
export default Workspace;