import React from 'react';
import "./Users.css";

import UsersTable from "../../components/UsersTable/UsersTable";
import PageHeader from "../../components/PageHeader/PageHeader";

function Users({headerName, icon}) {
    return (
        <>
            <PageHeader headerName={headerName} icon={icon}/>
            <UsersTable/>
        </>
    );
}

export default Users;