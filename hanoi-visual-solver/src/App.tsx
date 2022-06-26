import React, { useState } from "react";
import { HanoiArea } from "./components/hanoiArea";
import { Peg } from "./types";
import { hanoiSolveInConsole } from "./utils/hanoiSolveInConsole";
import { CreateDiscs } from "./utils/shared";

function App() {
  const [discs, setDiscs] = useState(0);
  const [drawDiscs, setDrawDiscs] = useState(0);
  const [message, setMessage] = useState("");

  let source = CreateDiscs(drawDiscs);
  let aux: Peg = { name: "Aux", contents: "" };
  let destination: Peg = { name: "Destination", contents: "" };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setDrawDiscs(discs);
    if (discs > 2 && discs < 10) {
      hanoiSolveInConsole(source, destination, aux, discs);
      setMessage("");
    } else {
      setMessage("Discs number must be between 3 and 9");
    }
  };

  const UserInput = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Discs:
          <input
            type="text"
            value={discs}
            onChange={(event) => setDiscs(Number(event.target.value))}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };

  return (
    <div className="App">
      <h1> Hanoi towers </h1>
      <UserInput />
      <HanoiArea discs={drawDiscs} message={message} />
    </div>
  );
}

export default App;
