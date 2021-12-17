import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader"; 

import "./CamerasCreate.css";

import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function CamerasCreate({ headerName, icon }) {
  const [name, setName] = useState("Cat in the Hat");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [age, setAge] = useState("");

  return (
    <div className="CamerasCreate">
      <PageHeader headerName={headerName} icon={icon} />
      <form action="">
      <TextField sx={{ m: 1, minWidth: 120 }}
          id="outlined-name"
          label="ID"
          value={name}
          onChange={handleChange}
          fullWidth 
        />
        {/* --------------------------------------------------------- */}

      <TextField sx={{ m: 1, minWidth: 120 }}
          id="outlined-name"
          label="Nombre"
          value={name}
          onChange={handleChange}
          fullWidth 
        />
        {/* --------------------------------------------------------- */}
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth >
            <InputLabel id="demo-simple-select-helper-label">Marca</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            
        </FormControl>

        {/* --------------------------------------- */}


        

        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth >
            <InputLabel id="demo-simple-select-helper-label">Modelo</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        {/* --------------------------------------- */}

        <TextField sx={{ m: 1, minWidth: 120 }}
          id="outlined-name"
          label="IP"
          value={name}
          onChange={handleChange}
          fullWidth 
        />
        {/* --------------------------------------- */}

        <FormControlLabel sx={{ m: 1, minWidth: 120 }}
          className="CamerasCreate-ptz-checkbox"
          value="false"
          control={<Checkbox />}
          label="PTZ"
          labelPlacement="PTZ"
          fullWidth 
        />
        {/* --------------------------------------- */}

        <Button variant="contained" color="success">
          <b>  CREAR NUEVA CAMARA </b>
        </Button>
      </form>
    </div>
  );
}

export default CamerasCreate;
