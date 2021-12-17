import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Index.css";

import securosLogo from "../../assets/img/securos_rb_white.png";

// icons----------------------------------------------
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// ----------------------------------------------

import {
  TextField,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

// ----------------------------------
import { loginChangeForm, loginRequesting } from '../../redux/auth/login/actions';
import { useDispatch, useSelector } from 'react-redux';


function Index({ headerName, icon }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {requesting, values } = useSelector(state => state.loginReducer);

  //esto maneja el ojito del formulario
  const [valuesFormVsible, setValuesFormVsible] = useState({
    showPassword: false,
  });

  const handleChangeForm = (key, value) => {
    dispatch(loginChangeForm(key, value));
  };

  const handleClickShowPassword = () => {
    setValuesFormVsible({
      showPassword: !valuesFormVsible.showPassword,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequesting(values));
  };
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }

  const {user:{rol}} = useSelector(state => state.userReducer);
  const {logged} = useSelector(state => state.clientReducer);

  useEffect(()=>{
    if(logged){
      if(rol === "superUsuario"){
        navigate('/modulo-admin');
      }else{
        navigate('/panel');
      }
    }
  },[rol])

  return (
    <div className="Index">
      <nav className="Index-nav">
        <div className="Index-nav-wrapper">
          <p className="Index-nav-p">SecurOS Cloud</p>
          <img src={securosLogo} className="Index-nav-securosLogo" />
        </div>
      </nav>
      <form className="Index-form" onSubmit={(e) => handleLogin(e)}>
        <p className="Index-form-header-txt">SecurOS Cloud</p>
        <TextField
          onChange={(e) => handleChangeForm('nickName', e.target.value)} 
          label={'margin="normal"'}
          fullWidth
          label="Usuario"
          id="fullWidth"
          size="small"
        />

        <FormControl sx={{ m: 1 }} variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={valuesFormVsible.showPassword ? "text" : "password"}
            value={values.password}
            onChange={(e) => handleChangeForm('password', e.target.value)} 
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {valuesFormVsible.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <LoadingButton variant="contained" fullWidth disableElevation type="submit" loading={requesting}>
          Iniciar
        </LoadingButton>
      </form>
    </div>
  );
}

export default Index;
