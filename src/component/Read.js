import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import StyledTableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function Read() {
  const select = useSelector((state) => state.user.form);
  console.log(select);

  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: "3%" }}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
          style={{ paddingLeft: "50px" }}
        >
          <TableHead style={{ backgroundColor: "black" }}>
            <TableRow>
              <StyledTableCell style={{ fontSize: "20px", color: "white" }}>
                Client Name
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "20px", color: "white" }}>
                Publisher
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "20px", color: "white" }}>
                Parent Company
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableCell style={{ fontSize: "25px", paddingLeft: "35px" }}>
              {select.clientName}
            </StyledTableCell>
            <StyledTableCell style={{ fontSize: "25px", paddingLeft: "35px" }}>
              {select.publisher}
            </StyledTableCell>
            <StyledTableCell style={{ fontSize: "25px", paddingLeft: "35px" }}>
              {select.parentCompany}
            </StyledTableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Read;
