import React, {useState} from 'react';

import {SwapPopUp, SwapTable} from '../components/SwapComponents';
import classes from './swap.module.css';

const Swap = () => {
    return (
        <div className={`pages-overlay flex full-width ${classes.swap}`}>
            <SwapTable />
            <SwapPopUp />
        </div>
    )
};

export default Swap;