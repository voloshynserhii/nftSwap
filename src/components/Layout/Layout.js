import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

import './layout.css'

const Layout = props => {
    return (
        <div className="layout">
            <Header />
            <main>
                <Sidebar />
                {props.children}
            </main>
            <Footer />
        </div>
    )
};
export default Layout;