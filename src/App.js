import "./App.css";
import Read from "./component/Read";
import Buttons from "./component/Buttons.js";
import Create from "./component/Create";
import { useState } from "react";

function App(props) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <Buttons onlyOpen={setisOpen} />
      <Read />
      <br />
      <br />
      {isOpen && <Create onlyClose={setisOpen} />}
    </>
  );
}

export default App;
