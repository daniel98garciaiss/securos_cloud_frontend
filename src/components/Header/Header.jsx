import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css"
// ------------------------- hooks
import useOutsideClick from "../../hooks/useOutsideClick";
// ----------------------------- icons
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
// ---------------------------------------- redux
import { useDispatch, useSelector } from 'react-redux';

import {logoutRequesting} from "../../redux/auth/logout/actions";
import { loginResetStates } from '../../redux/auth/login/actions';
import { clientUnset } from '../../redux/client/actions';
import { setSidenav_menu_toggle } from '../../redux/general/actions';

function Header(props) {
    const [openDropDown, setOpenDropDown] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user:{name, lastName}} = useSelector(state => state.userReducer);
    const { token } = useSelector(state => state.clientReducer); 

    const handleSideNavToggle = (value) => {
        dispatch(setSidenav_menu_toggle(value));
    };

    const handleLogout = () => {
        dispatch(logoutRequesting(token));
        dispatch(loginResetStates());
        dispatch(clientUnset());
        navigate("/");
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
                <h5 className="Header-user-info-section-h5">{`${name} ${lastName}`}</h5>
                <ArrowDropDownIcon/>

                {openDropDown&&
                    <div className="Header-popUp" >
                        <div className="Header-popUp-item" onClick={() => handleLogout()}>
                            <LogoutIcon fontSize="small"/> <h5 >Cerrar sesión</h5>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    );
}

export default Header;