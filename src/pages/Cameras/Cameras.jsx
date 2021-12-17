import React from 'react';
import "./Cameras.css";

import CamerasTable from "../../components/CamerasTable/CamerasTable";
import PageHeader from "../../components/PageHeader/PageHeader";

function Cameras({headerName, icon}) {
    return (
        <>
            <PageHeader headerName={headerName} icon={icon}/>
            <CamerasTable/>
        </>
    );
}

export default Cameras;