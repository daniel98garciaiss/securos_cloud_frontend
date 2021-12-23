import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader"; 

import "./UsersCreate.css";

import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'; 
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";



 function UsersCreate({ headerName, icon }) {
  const [name, setName] = useState("Cat in the Hat");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [age, setAge] = useState("");

  return (
    <div className="UsersCreate">
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
          label="Usuario"
          value={name}
          onChange={handleChange}
          fullWidth 
        />
        {/* --------------------------------------------------------- */}


        <TextField sx={{ m: 1, minWidth: 120 }}
          id="outlined-name"
          label="Contraseña"
          value={name}
          onChange={handleChange}
          fullWidth 
          />

        {/* --------------------------------------- */}
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth >
            <InputLabel id="demo-simple-select-helper-label">Alcance</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Alcance"
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={"Administrator"}>Administrator</MenuItem>
            {/* control total */}
            <MenuItem value={"Mantenimiento"}>Mantenimiento</MenuItem>
            {/* edita no crea ni borra*/}
            <MenuItem value={"Usuario"}>Usuario</MenuItem>
            {/* solo puede ver camaras */}
            </Select>
            
        </FormControl>
       
        <Button variant="contained" color="success">
          <b> CREAR NUEVO USUARIO</b>
        </Button>
      </form>
    </div>
  );
}
 
export default UsersCreate;