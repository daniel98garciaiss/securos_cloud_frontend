import * as React from "react";
import "./UsersTable.css";


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

function createData(id, name, fat, carbs, ) {
  return { id, name,  fat, carbs,  };
}

const rows = [
  createData("1", "user 1", 6.0, 24),
  createData("2", "user 2", 9.0, 37),
  createData("3", "user 3", 16.0, 24),
  createData("4", "user 4", 3.7, 67),
  createData("5", "user 5", 16.0, 49),
];

export default function UsersTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background: 'linear-gradient(180deg, #3E4B6F, #293450)'}}>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">Usuario</StyledTableCell>
            <StyledTableCell align="center">IP</StyledTableCell>
            <StyledTableCell align="center">Alcance</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>

          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.name}
                {/* <Button variant="contained" color="primary">  Send </Button> */}
              </StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center" className="UsersTable table_actions"><ClearIcon color="error" fontSize="large"/> </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
