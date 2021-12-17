import React from 'react';
import "./FastAccessCard.css";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
// icons---------------


function FastAccessCard({columPosition, icon, info_txt, button_txt, url_route}) {

    function insetTxt() {
        return {
           __html: info_txt};
    }; 

    return (
        <div className={`FastAccessCard ${columPosition}`}>
             <div className="FastAccessCard-container">
                 <i>{icon}</i>
                 <p dangerouslySetInnerHTML={insetTxt()}/>
                 <Link to={url_route}>
                    <Button variant="contained" color="primary" size="large"><b>{button_txt}</b></Button>
                 </Link>
             </div>
        </div>
    );
}

export default FastAccessCard;