import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import StyledTableCell from "@mui/material/TableCell";
import StyledTableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./store/slices/formslices";

function Read({ onlyClose }) {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.user.form);
  // console.log(select);

  function handleDelete(id) {
    // console.log(id);
    // setselected((olditems) => {
    //   return olditems.filter((value, index) => {
    //     console.log(index, id);
    //     return index !== id;
    //   });
    // });
    dispatch(deleteUser(id));
  }

  function handleEdit(select, id) {
    // console.log(select, id);
    onlyClose(true);
    sessionStorage.setItem("clientName", select.clientName);
    sessionStorage.setItem("publisher", select.publisher);
    sessionStorage.setItem("parentCompany", select.parentCompany);
    sessionStorage.setItem("id", id);

    // dispatch(editUser({ select, id }));
  }

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
              <StyledTableCell
                style={{ fontSize: "20px", color: "white" }}
              ></StyledTableCell>
              <StyledTableCell
                style={{ fontSize: "20px", color: "white" }}
              ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {select.map((value, index) => {
              return (
                <StyledTableRow key={index} index={index}>
                  <StyledTableCell
                    style={{ fontSize: "25px", paddingLeft: "35px" }}
                    component="th"
                    scope="row"
                  >
                    {value.clientName}
                  </StyledTableCell>

                  <StyledTableCell
                    style={{ fontSize: "25px", paddingLeft: "35px" }}
                  >
                    {value.publisher}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontSize: "25px", paddingLeft: "35px" }}
                  >
                    {value.parentCompany}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontSize: "25px", paddingLeft: "35px" }}
                  >
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => handleEdit(value, index)}
                    >
                      Edit
                    </button>
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontSize: "25px", paddingLeft: "35px" }}
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Read;
