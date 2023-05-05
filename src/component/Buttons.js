import { Button } from "@mui/material";
import React from "react";

function Buttons({ onlyOpen }) {
  function addClient() {
    onlyOpen(true);
    sessionStorage.removeItem("clientName");
    sessionStorage.removeItem("publisher");
    sessionStorage.removeItem("parentCompany");
    sessionStorage.removeItem("id");
  }

  return (
    <>
      <Button
        variant="contained"
        size="medium"
        style={{ marginLeft: "80%", marginTop: "20px" }}
        onClick={addClient}
      >
        Add New Client
      </Button>
    </>
  );
}

export default Buttons;
