import React, { useRef, useState } from 'react';
import "./Header.css"
import useOutsideClick from "../../hooks/useOutsideClick";

import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { setSidenav_menu_toggle } from '../../redux/general/action';
import { useDispatch } from 'react-redux';

function Header(props) {
    const [openDropDown, setOpenDropDown] = useState(false);

    const dispatch = useDispatch();
    
    
    const handleSideNavToggle = (value) => {
        dispatch(setSidenav_menu_toggle(value));
    };
    
    const sesion_dropDown = useRef(null);
    useOutsideClick(sesion_dropDown, ()=>{
        setOpenDropDown(false);
    });

    return (
        <div className="Header" >
            <i className="Header-burguer-button">
                <MenuIcon onClick={()=>handleSideNavToggle(true)}/>
            </i>
            <div className="Header-user-info-section" ref={sesion_dropDown} onClick={() => setOpenDropDown(!openDropDown)}>
                <PersonIcon/>
                <h5 className="Header-user-info-section-h5">Full Name</h5>
                <ArrowDropDownIcon/>

                {openDropDown&&
                    <div className="Header-popUp" >
                        <div className="Header-popUp-item">
                        <LogoutIcon fontSize="small"/> <h5 >Cerrar sesión</h5>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Header;