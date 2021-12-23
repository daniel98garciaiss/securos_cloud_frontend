import React from 'react';
import "./Servers.css";

import ServerTable from "../../components/ServerTable/ServerTable";
import PageHeader from "../../components/PageHeader/PageHeader";

function Servers({headerName, icon}) {
    return (
        <>
            <PageHeader headerName={headerName} icon={icon}/>
            <ServerTable/>
        </>
    );
}

export default Servers;