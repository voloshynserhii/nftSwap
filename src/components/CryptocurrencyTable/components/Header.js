import React from 'react';

import classes from '../cryptocurrency-table.module.css'

const CryptocurrencyTableHeader = () => {
    return (
        <thead className={classes.header}>
            <tr>
                <th>Cryptocurrency</th>
            </tr>
        </thead>
    );
};
export default CryptocurrencyTableHeader;