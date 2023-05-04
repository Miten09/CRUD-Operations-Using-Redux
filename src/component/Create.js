import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { FormActions, editUser, setNewform } from "./store/slices/formslices";

function Create({ onlyClose }) {
  const [form, setform] = useState({
    clientName: "",
    publisher: "",
    parentCompany: "",
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setform({
      ...form,
      [name]: value,
    });
  }
  // onst [name, setName]= useState("")

  // setName('vainik'
  useEffect(() => {
    setform({
      clientName: sessionStorage.getItem("clientName"),
      publisher: sessionStorage.getItem("publisher"),
      parentCompany: sessionStorage.getItem("parentCompany"),
    });
  }, []);
  function handleSave() {
    // e.preventDefault();
    onlyClose(false);
    // console.log(form)
    // if( sessionStorage.getItem("clientName")){
    //   edit
    // }else {

    // }
    dispatch(setNewform(form));
    // dispatch(FormActions.setReset({form:''}));

    // console.log(form);
  }

  function handleUpdate() {
    onlyClose(false);
    // console.log(form);
    dispatch(editUser(form, sessionStorage.getItem("id")));
  }
  return (
    <form onSubmit={handleSave}>
      <TextField
        label="Client Name"
        name="clientName"
        value={form.clientName}
        variant="outlined"
        onChange={handleChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        label="Publisher"
        variant="outlined"
        name="publisher"
        value={form.publisher}
        onChange={handleChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        label="Parent Company"
        name="parentCompany"
        variant="outlined"
        value={form.parentCompany}
        onChange={handleChange}
      />
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          size="medium"
          style={{ marginLeft: "45%" }}
          onClick={handleSave}
        >
          Save Changes
        </Button>
        <Button
          variant="contained"
          size="medium"
          style={{ marginLeft: "2%" }}
          onClick={() => onlyClose(false)}
        >
          Close
        </Button>
        <Button
          variant="contained"
          size="medium"
          style={{ marginLeft: "2%" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </div>
    </form>
  );
}

export default Create;
