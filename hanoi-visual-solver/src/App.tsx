import React, { useState } from "react";
import styles from "./styles/styles.module.css";

type Peg = {
  name: string;
  contents: string;
};

type RecordedMove = {
  disc: number;
  source: Peg;
  target: Peg;
  message: string;
};

let moveLog: RecordedMove[] = [];

function App() {
  const UserInput = () => {
    const [discs, setDiscs] = useState(0);
    let source = CreateDiscs(discs);
    let aux: Peg = { name: "Aux", contents: "" };
    let destination: Peg = { name: "Destination", contents: "" };

    const handleSubmit = (event: any) => {
      hanoiSolveInConsole(source, destination, aux, discs);
      event.preventDefault();
    };

    const hanoiSolveInConsole = function (
      source: Peg,
      destination: Peg,
      aux: Peg,
      discs: number
    ) {
      if (discs <= 0) {
        return;
      }

      hanoiSolveInConsole(source, aux, destination, discs - 1);
      let message = `Move Disk ${discs} from ${source.name.toUpperCase()} to ${destination.name.toUpperCase()}`;
      moveDisc(discs, source, destination, message);
      hanoiSolveInConsole(aux, destination, source, discs - 1);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Discs:
          <input
            type="text"
            onChange={(event) => setDiscs(Number(event.target.value))}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };

  const HanoiArea = () => {
    return <div className={styles.hanoiContainer}> </div>;
  };

  //TODO: clean up the mumbo jumbo below

  const CreateDiscs = (discs: number): Peg => {
    let discsArray: string = "";

    if (discs > 1) {
      for (let idx = discs; idx > 0; idx--) {
        discsArray += idx.toString();
      }
    } else console.log("not enough discs");

    return { name: "Source", contents: discsArray };
  };

  //aux
  const moveDisc = (
    disc: number,
    source: Peg,
    target: Peg,
    message: string
  ) => {
    // console.log("source", source);
    source.contents = source.contents.slice(0, source.contents.length - 1);

    target.contents += disc.toString();

    moveLog.push({
      disc: disc,
      source: { name: source.name, contents: source.contents },
      target: {
        name: target.name,
        contents: target.contents,
      },
      message: message,
    });

    console.log(moveLog);
  };

  //TODO: check data structure

  return (
    <div className="App">
      <h1> Hanoi towers </h1>
      <UserInput />
      <HanoiArea />
    </div>
  );
}

export default App;
