import React from 'react';

interface WorkspaceNavProps {
    onTabSelect: (tab: string) => void;
}

const WorkspaceNav: React.FC<WorkspaceNavProps> = ({ onTabSelect }) => {
    return (
        <div className="bg-white text-gray-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                        <button onClick={() => onTabSelect('homework')} className="px-3 text-sm pt-2 pb-4 font-medium hover:border-b-2 hover:rounded-none hover:border-black hover:text-black">Homework</button>
                        <button onClick={() => onTabSelect('notes')} className="px-3 text-sm pt-2 pb-4 font-medium hover:border-b-2 hover:rounded-none hover:border-black hover:text-black">Notes</button>
                        <button onClick={() => onTabSelect('bookings')} className="px-3 text-sm pt-2 pb-4 font-medium hover:border-b-2 hover:rounded-none hover:border-black hover:text-black">Bookings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkspaceNav;