import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';

import './layout.css'

const Layout = props => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Sidebar />
                {props.children}
            </main>
        </div>
    )
};
export default Layout;