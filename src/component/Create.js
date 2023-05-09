import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  deleteUser,
  editUser,
  setNewform,
} from "./store/slices/formslices";

function Create({ onlyClose }) {
  const [form, setform] = useState({
    clientName: "",
    publisher: "",
    parentCompany: "",
    // contact: [],
  });

  const [newcontact, setNewContact] = useState([]);

  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setform({
      ...form,
      [name]: value,
    });
  }

  function handleNumberChange(e, index) {
    // console.log(index);
    // console.log(e.target.value);
    var text = e.target.value;
    if (newcontact[index]) {
      newcontact[index] = text;
    } else {
      newcontact[index] = [...newcontact, text];
    }
    console.log(newcontact);
    console.log(text, index);
  }

  function handleNumberSave() {
    setNewContact([...newcontact, []]);
    // setNewContact([]);
  }

  useEffect(() => {
    setform({
      clientName: sessionStorage.getItem("clientName"),
      publisher: sessionStorage.getItem("publisher"),
      parentCompany: sessionStorage.getItem("parentCompany"),
    });
    setNewContact([
      sessionStorage.getItem("newcontact-0"),
      sessionStorage.getItem("newcontact-1"),
      sessionStorage.getItem("newcontact-2"),
    ]);
  }, []);

  function handleSave() {
    onlyClose(false);
    if (sessionStorage.getItem("clientName")) {
      dispatch(editUser({ ...form, id: sessionStorage.getItem("id") }));
      sessionStorage.clear();
    } else {
      dispatch(setNewform({ form, newcontact }));
    }
  }

  function handleDelete(id) {
    // console.log(id);
    setNewContact((olditems) => {
      return olditems.filter((items, index) => {
        return index !== id;
      });
    });
  }

  const isEdit = sessionStorage.getItem("clientName") ? true : false;

  return (
    <>
      <div className="modal-wrapper" onClick={() => onlyClose(false)}></div>
      <div className="modal-container">
        <h3 style={{ textAlign: "center", paddingBottom: "30px" }}>
          {isEdit ? "Edit Client" : "Add Client"}
        </h3>
        <form onSubmit={handleSave}>
          <TextField
            label="Client Name"
            name="clientName"
            value={form.clientName || ""}
            variant="outlined"
            onChange={handleChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            label="Publisher"
            variant="outlined"
            name="publisher"
            value={form.publisher || ""}
            onChange={handleChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <TextField
            label="Parent Company"
            name="parentCompany"
            variant="outlined"
            value={form.parentCompany || " "}
            onChange={handleChange}
          />
          <br />
          <br />
          <Button variant="contained" size="small" onClick={handleNumberSave}>
            Add New Contact info
          </Button>
          <br />
          <br />
          {newcontact.map((value, index) => {
            return (
              <div style={{ display: "flex", gap: "5%" }} key={index}>
                <TextField
                  label="Enter Your number"
                  variant="outlined"
                  name="phoneNumber"
                  value={newcontact[index]}
                  onChange={(e) => handleNumberChange(e, index, value)}
                />
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
          <div
            style={{ display: "flex", marginTop: "35px", marginLeft: "45%" }}
          >
            <button
              variant="contained"
              size="medium"
              style={{ marginLeft: "30%" }}
              onClick={handleSave}
              className="btn btn-success"
            >
              {isEdit ? "Save Changes" : "Add Client "}
            </button>
            <Button
              variant="contained"
              size="medium"
              style={{ marginLeft: "2%" }}
              onClick={() => onlyClose(false)}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
