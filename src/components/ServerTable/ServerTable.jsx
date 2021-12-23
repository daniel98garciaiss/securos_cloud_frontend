import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from 'file-saver'
import "./ServerTable.css";

// --------------------------------- compnents 
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// --------------------------------- icons
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ClearIcon from '@mui/icons-material/Clear';
// --------------------------- redux
import { serversGetRequesting } from "../../redux/servers/actions";

const StyledTableCell = styled(TableCell)(({ theme , background}) => ({

  //esto da estilo a la tabla
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: background,
    color: theme.palette.common.white,
  },
  //esto da estilo a la tabla
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
  //esto da estilo a la tabla
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//fake data
// function createData(id, name, fat, carbs, ) {
//   return { id, name,  fat, carbs,  };
// }
// const rows = [
//   createData("1", "user 1", 6.0, 24),
//   createData("2", "user 2", 9.0, 37),
//   createData("3", "user 3", 16.0, 24),
//   createData("4", "user 4", 3.7, 67),
//   createData("5", "user 5", 16.0, 49),
// ];

export default function ServerTable() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {servers} = useSelector(state => state.serversReducer);
  const {token} = useSelector(state => state.clientReducer);

  useEffect(() => {
    dispatch(serversGetRequesting(token));
  },[])

  const createFile = (serverConf) => {
    const blob = new Blob([ serverConf ], { type: 'text/plain;charset=utf-8' });
    saveAs( blob, 'file.conf' );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{background: 'linear-gradient(180deg, #3E4B6F, #293450)'}}>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">IP</StyledTableCell>
            <StyledTableCell align="center">Vpn</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">IP normal</StyledTableCell>
            <StyledTableCell align="center">IP vpn</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {servers && servers.map((server, index) => (
            <StyledTableRow key={server._id}  >
              <StyledTableCell align="center" component="th" scope="row"> {server._id} </StyledTableCell>
              <StyledTableCell align="center"> {server.name} </StyledTableCell>
              <StyledTableCell align="center">{server.ip}</StyledTableCell>
              <StyledTableCell align="center">{server.vpn}</StyledTableCell>
              <StyledTableCell align="center">{server.state ? "ON" : "OFF"}</StyledTableCell>
              <StyledTableCell align="center">{server.ipNormal}</StyledTableCell>
              <StyledTableCell align="center">{server.ipVpn}</StyledTableCell>
              <StyledTableCell align="center" className="ServerTable table_actions">
                <ClearIcon color="error" fontSize="large"/> 
                <CloudDownloadIcon onClick={()=> createFile(server.config)} color="" fontSize="large"/> 
              </StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
