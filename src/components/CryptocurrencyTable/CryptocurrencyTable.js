import React from 'react';

import CryptocurrencyTableHeader from './components/Header';
import classes from './cryptocurrency-table.module.css'

const CryptocurrencyTable = () => {
    return (
        <div className={classes.table}>
            <CryptocurrencyTableHeader />
        </div>
    );
};
export default CryptocurrencyTable;