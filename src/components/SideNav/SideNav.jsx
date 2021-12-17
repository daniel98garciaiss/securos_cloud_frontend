import React, { useState } from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// icons-----------------
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import GroupIcon from "@mui/icons-material/Group";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HomeIcon  from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import ClearIcon from '@mui/icons-material/Clear';

// ------------------------imgs
import securosLogo from "../../assets/img/securos_rb_white.png";


// ----------------------------------- actions
import { setSidenav_menu_toggle } from "../../redux/general/action";

function SideNav(props) {

  const [moduleOptionCameras, setModuleOptionCameras] = useState(false);
  const [moduleOptionUsers, setModuleOptionUsers] = useState(false);
  const [moduleOptionServers, setModuleOptionServers] = useState(false);

  const dispatch = useDispatch();
  const {sideNav:{active}} = useSelector((state) => state.generalReducer);

  const handleSideNavToggle = (value) => {
    dispatch(setSidenav_menu_toggle(value));
  };

  return (
    <div className={`SideNav-container ${active ? "active" : ""}`}>
      <i className="SideNav-close-icon" onClick={()=>handleSideNavToggle(false)}><ClearIcon color="error" fontSize="large"/></i>
      <div className="SideNav-header">
        <img className="Securos-logo-img" src={securosLogo} alt="" />
        <h4>Securos Cloud</h4>
      </div>

      <Link to="/panel">
        <div
          className="SideNav-modul"
        >
          <div className="SideNav-left-section">
            <HomeIcon/>
            <p className="">Mi Sitio</p>
          </div>
          <i className={`SideNav-right-section ${moduleOptionServers && "rotateIcon"}`}>
          </i>
        </div>
      
      </Link>
      <br/>
      <h6 className="SideNav-section-tittle">MODULOS</h6>

      <div
        className="SideNav-modul"
        onClick={() => setModuleOptionCameras(!moduleOptionCameras)}
      >
        <div className="SideNav-left-section">
          <CameraAltIcon />
          <p>Camaras</p>
        </div>
        <i className={`SideNav-right-section ${moduleOptionCameras && "rotateIcon"}`}>
          <ArrowRightIcon fontSize="small" />
        </i>
      </div>
      {moduleOptionCameras === true && (
        <>
          <Link to="/camaras">
            <div className="SideNav-modul">
              <div className="SideNav-left-section">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <p>ver</p>
              </div>
            </div>
          </Link>

          <Link to="/camaras/crear">
            <div className="SideNav-modul">
              <div className="SideNav-left-section">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <p>crear</p>
              </div>
            </div>
          </Link>
        </>
      )}

      <div
        className="SideNav-modul"
        onClick={() => setModuleOptionUsers(!moduleOptionUsers)}
      >
        <div className="SideNav-left-section">
          <GroupIcon />
          <p>Usuarios</p>
        </div>
        <i className={`SideNav-right-section ${moduleOptionUsers && "rotateIcon"}`}>
          <ArrowRightIcon fontSize="small" />
        </i>
      </div>
      {moduleOptionUsers === true && (
        <>
            <Link to="/usuarios">
              <div className="SideNav-modul">
                <div className="SideNav-left-section">
                    <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                    <p>ver</p>
                </div>
              </div>
            </Link>
            <Link to="/usuarios/crear">
            <div className="SideNav-modul">
              <div className="SideNav-left-section">
                  <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                  <p>crear</p>
              </div>
            </div>
            </Link>

        </>
      )}


<div
        className="SideNav-modul"
        onClick={() => setModuleOptionServers(!moduleOptionServers)}
      >
        <div className="SideNav-left-section">
          <StorageIcon />
          <p>Servidores</p>
        </div>
        <i className={`SideNav-right-section ${moduleOptionServers && "rotateIcon"}`}>
          <ArrowRightIcon fontSize="small" />
        </i>
      </div>
      {moduleOptionServers === true && (
        <>
            <div className="SideNav-modul">
            <div className="SideNav-left-section">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <p>ver</p>
            </div>
            </div>

            <div className="SideNav-modul">
            <div className="SideNav-left-section">
                <FiberManualRecordIcon sx={{ fontSize: 10 }} />
                <p>crear</p>
            </div>
            </div>
        </>
      )}
    </div>
  );
}

export default SideNav;
