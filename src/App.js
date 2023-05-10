import "./App.css";
import Read from "./component/Read";
import Buttons from "./component/Buttons.js";
import Create from "./component/Create";
import { useState } from "react";

function App(props) {
  const [isOpen, setisOpen] = useState(false);
  const [nodata, setNodata] = useState(true);

  return (
    <>
      <Buttons onlyOpen={setisOpen} />
      <Read onlyClose={setisOpen} nodata={nodata} />
      <br />
      <br />
      {isOpen && <Create onlyClose={setisOpen} nodata={setNodata} />}
    </>
  );
}

export default App;
