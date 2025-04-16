import React from 'react';
import DashboardCard from './DashboardCard';





const Dashboard = () => {
    return (
        <div className="py-4 lg:mx-24 max-md:w-full bg-white">
            <div className="flex justify-between items-center mb-6 max-md:w-full">
                <DashboardCard/>
            </div>
         
        </div>
    );
};

export default Dashboard;
