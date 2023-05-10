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

function Read({ onlyClose, nodata }) {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.user.form);

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
    onlyClose(true);

    sessionStorage.setItem(
      "clientName",
      select.clientName || select.form.clientName
    );
    sessionStorage.setItem(
      "publisher",
      select.publisher || select.form.publisher
    );
    sessionStorage.setItem(
      "parentCompany",
      select.parentCompany || select.form.parentCompany
    );
    sessionStorage.setItem("newcontact", select.newcontact);
    sessionStorage.setItem("id", id);
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
            <TableRow style={{ textAlign: "center" }}>
              <StyledTableCell
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                Client Name
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                Publisher
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                Parent Company
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  minWidth: "100px",
                }}
              >
                Contact
              </StyledTableCell>
              <StyledTableCell
                style={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  minWidth: "170px",
                }}
              >
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {nodata ? (
            <h4
              style={{
                marginLeft: "200%",
                width: "100%",
                paddingTop: "20px",
              }}
            >
              <TableHead>No Data Found</TableHead>
            </h4>
          ) : (
            <TableBody style={{}}>
              {select.map((value, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      style={{
                        fontSize: "25px",

                        textAlign: "center",
                        minWidth: "100px",
                      }}
                      component="th"
                      scope="row"
                    >
                      {value.clientName || value.form.clientName}
                    </StyledTableCell>

                    <StyledTableCell
                      style={{
                        fontSize: "25px",

                        textAlign: "center",
                        minWidth: "100px",
                      }}
                    >
                      {value.publisher || value.form.publisher}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        fontSize: "25px",

                        textAlign: "center",
                        minWidth: "100px",
                      }}
                    >
                      {value.parentCompany || value.form.parentCompany}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        fontSize: "25px",
                        textAlign: "center",
                        minWidth: "100px",
                      }}
                    >
                      {(index ? "," : "") + value.newcontact}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        fontSize: "25px",

                        textAlign: "center",
                        minWidth: "100px",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleEdit(value, index)}
                      >
                        Edit
                      </button>
                      &nbsp;&nbsp;
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
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default Read;
