import React from 'react';

import CryptocurrencyTableHeader from './components/Header';
import classes from './cryptocurrency-table.module.css'

const CryptocurrencyTable = () => {
    return (
        <table className={classes.table}>
            <CryptocurrencyTableHeader />
        </table>
    );
};
export default CryptocurrencyTable;