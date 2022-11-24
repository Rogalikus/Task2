import "./App.css";
import { React, useState } from "react";
import { Table } from "./Components/table";
import { CurrentTime } from "./Components/Time";
import { imgData } from "./Images/imgData";
import { Modal } from "./Components/modal";

function App() {
  const [pic, setPic] = useState("");
  const onCloseHandler = () => {
    setPic("");
  };
  return (
    <div className="App">
      <CurrentTime />
      <Table imgData={imgData} setActive={setPic} />
      <Modal onclose={onCloseHandler} pic={pic} />
    </div>
  );
}

export default App;
