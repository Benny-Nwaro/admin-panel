import React from 'react';
import BeginnersTable from './BeginnersTable';
import IntermediateTable from './IntermediateTable';
import AdvancedTable from './AdvancedTable';
import MusicStudentsAnalyticsHeader from './MusicStudentsAnalyticsHeader';





const MusicTable = () => {
    return (
     <div className='mt-8'>
        <MusicStudentsAnalyticsHeader/>
        <div className='space-y-12'>
                <BeginnersTable/>
                <IntermediateTable/>
                <AdvancedTable/>              
        </div>
     </div>
    );
};

export default MusicTable;
