import * as React from "react";
import "./CamerasTable.css";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";
import ClearIcon from '@mui/icons-material/Clear';

const StyledTableCell = styled(TableCell)(({ theme , background}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: background,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("camara 1", 159, 6.0, 24, 4.0),
  createData("camara 2", 237, 9.0, 37, 4.3),
  createData("camara 3", 262, 16.0, 24, 6.0),
  createData("camara 4", 305, 3.7, 67, 4.3),
  createData("camara 5", 356, 16.0, 49, 3.9),
];

export default function CamerasTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background: 'linear-gradient(180deg, #3E4B6F, #293450)'}}>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Marca</StyledTableCell>
            <StyledTableCell align="center">Modelo</StyledTableCell>
            <StyledTableCell align="center">IP</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.name}
                {/* <Button variant="contained" color="primary">  Send </Button> */}
              </StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
              <StyledTableCell align="center" className="CameraTable table_actions"><ClearIcon color="error" fontSize="large"/> </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
