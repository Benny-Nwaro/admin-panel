import React from 'react';
import IntermediateTable from './IntermediateTable';
import AdvancedTable from './AdvancedTable';
import LanguageHeader from './LanguageHeader';
import Kindergarten from './Kindergarten';




const LanguageTable = () => {
    return (
        <div className='mt-8'>
        <LanguageHeader/>
        <div className='space-y-12'>
            <Kindergarten/>
            <IntermediateTable/>
            <AdvancedTable/>              
        </div>
        </div>
       
    );
};

export default LanguageTable;
