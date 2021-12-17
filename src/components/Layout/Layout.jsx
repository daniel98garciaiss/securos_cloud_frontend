import React from 'react';
import "./Layout.css";

import SideNav from '../SideNav/SideNav';
import Header from '../Header/Header';
function Layout({children}) {
    return (
        <div className="Layout-container">
            <header className="Layout header-grid-area"><Header/></header>
            <div className="Layout side-nav-grid-area">
                <SideNav/>
            </div>
            <section className="Layout main-section-grid-area">
                {children}
            </section>
        </div>
    );
}

export default Layout;