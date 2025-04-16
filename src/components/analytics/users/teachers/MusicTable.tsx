import React from 'react';
import MusicTeachersAnalyticsHeader from './MusicTeachersAnalyticsHeader';
import BeginnersTable from './BeginnersTable';
import IntermediateTable from './IntermediateTable';
import AdvancedTable from './AdvancedTable';




const MusicTable = () => {
    return (
     <div className='mt-8'>
        <MusicTeachersAnalyticsHeader/>
        <div className='space-y-12'>
                <BeginnersTable/>
                <IntermediateTable/>
                <AdvancedTable/>              
        </div>
     </div>
    );
};

export default MusicTable;
