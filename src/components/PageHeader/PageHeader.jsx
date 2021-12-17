import React from 'react';
import "./PageHeader.css";
function PageHeader({icon, headerName}) {
    return (
        <div className="PageHeader">
            <i>{icon}</i>
            <h2>{headerName}</h2>
        </div>
    );
}

export default PageHeader;