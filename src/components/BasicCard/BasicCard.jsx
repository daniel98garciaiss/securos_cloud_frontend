import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./BasicCard.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function BasicCard({columPosition, icon, info_name, quantity, goTo}) {

    const navigate = useNavigate();
    const handleGoTo = (url) => {
        navigate(url);
    }

    return (
        <div className={`BasicCard ${columPosition}`} onClick={() => handleGoTo(goTo)}>
            <div className="BasicCard-left-side">
                <i className="BasicCard-icon">{icon}</i>
                <div className="BasicCard-info">
                    <small>{info_name}</small>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className="BasicCard-right-side">
                <ArrowRightAltIcon color="disabled"/>
            </div>
        </div>
    );
}

export default BasicCard;