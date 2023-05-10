import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { editUser, setNewform } from "./store/slices/formslices";
import { useForm } from "react-hook-form";

function Create({ onlyClose, nodata }) {
  const [form, setform] = useState({
    clientName: "",
    publisher: "",
    parentCompany: "",
  });

  const [newcontact, setNewContact] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    let text = e.target.value;
    let dummy = newcontact;

    dummy[index] = text;
    setNewContact(() => [...dummy]);
  }

  function handleNumberSave() {
    setNewContact([...newcontact, ""]);
  }

  useEffect(() => {
    setform({
      clientName: sessionStorage.getItem("clientName"),
      publisher: sessionStorage.getItem("publisher"),
      parentCompany: sessionStorage.getItem("parentCompany"),
    });
    // console.log(sessionStorage.getItem("newcontact"));
    let b = sessionStorage.getItem("newcontact")?.split(",");
    // console.log(b);
    setNewContact(b || []);
  }, []);

  function handleSave() {
    nodata(false);
    onlyClose(false);
    if (sessionStorage.getItem("clientName")) {
      dispatch(
        editUser({ ...form, id: sessionStorage.getItem("id"), newcontact })
      );
      sessionStorage.clear();
    } else {
      dispatch(setNewform({ form, newcontact }));
    }
  }

  function handleDelete(id) {
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
      <div
        className="modal-container"
        style={{ overflowY: "scroll", maxHeight: "70%" }}
      >
        <h3 style={{ textAlign: "center", paddingBottom: "30px" }}>
          {isEdit ? "Edit Client" : "Add Client"}
        </h3>
        <form onSubmit={handleSubmit(handleSave)}>
          <TextField
            required
            label="Client Name"
            name="clientName"
            value={form.clientName || ""}
            variant="outlined"
            onChange={handleChange}
            // {...register("clientName", { required: "clientName is Required" })}
          />
          {/* <p style={{ color: "red" }}>{errors.clientName?.message}</p> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            label="Publisher"
            variant="outlined"
            name="publisher"
            value={form.publisher || ""}
            onChange={handleChange}
            required
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <TextField
            label="Parent Company"
            variant="outlined"
            name="parentCompany"
            value={form.parentCompany || ""}
            onChange={handleChange}
            required
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
              <div
                style={{
                  display: "flex",
                  gap: "5%",
                  padding: "1.5%",
                  marginLeft: "-2%",
                }}
                key={index}
              >
                <TextField
                  label={`Mobile Number ${index ? index + 1 : "1"}`}
                  variant="outlined"
                  name="phoneNumber"
                  value={value}
                  onChange={(e) => handleNumberChange(e, index, value)}
                  required
                />

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
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <button
              variant="contained"
              size="medium"
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
