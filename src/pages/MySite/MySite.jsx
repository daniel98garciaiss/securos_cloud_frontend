import React from 'react';
import "./MySite.css";

import BasicCard from "../../components/BasicCard/BasicCard";
import FastAccessCard from "../../components/FastAccessCard/FastAccessCard";
import PageHeader from "../../components/PageHeader/PageHeader";


// icons----------------------------------------------
import HomeIcon  from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

// ----------------------------------------------

function MySite({headerName, icon}) {
    return (
        <div className="MySite">
            <PageHeader headerName={headerName} icon={icon}/>
            <section className="MySite-main">
                <BasicCard columPosition="MySite-col-1" 
                           icon={<CameraAltIcon sx={{ fontSize: 45 }} color="primary"/>} 
                           info_name={"camaras"} 
                           quantity={20}
                           goTo={"/camaras"}
                />
                <BasicCard columPosition="MySite-col-2" 
                           icon={<GroupIcon sx={{ fontSize: 45 }} color="primary"/>} 
                           info_name={"usuarios"} 
                           quantity={3}
                           goTo={"/usuarios"}
                           />
                
                <FastAccessCard columPosition="MySite-col-3" 
                    icon={<AddAPhotoIcon sx={{ fontSize: 40 }}/>} 
                    info_txt={"Crea una nueva <b>CAMARA</b> desde ¡aqui!"} 
                    button_txt="CREAR CAMARA" 
                    url_route="/camaras/crear"
                />
                

            </section>
        </div>
    );
}

export default MySite;