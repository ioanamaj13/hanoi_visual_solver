import React, { useState } from "react";
import styles from "./styles/styles.module.css";

type Disc = {
  position: number;
  value: number;
};

function App() {
  const UserInput = () => {
    const [discs, setDiscs] = useState(0);

    const handleSubmit = (event: any) => {
      solveInConsole(discs);
      event.preventDefault();
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Discs:
          <input
            type="text"
            //value={discs}
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

  const CreateDiscs = (discs: number) => {
    console.log(discs);
    //discs as arrays
    let discsArray: Disc[] = [];

    if (discs > 1) {
      for (let idx = 0; idx < discs; idx++) {
        discsArray.push({
          position: idx,
          value: idx,
        });
      }
    } else console.log("eeek");
    return discsArray.reverse();
  };

  const solveInConsole = (discs: number) => {
    let initialDiscs = CreateDiscs(discs);
    let middleDiscs: Disc[] = [];
    let solvedDiscs: Disc[] = [];

    console.log("initialDiscs", initialDiscs);
    //console.log(initialDiscs.length);
    console.log("middleDiscs", middleDiscs);
    console.log("solvedDiscs", solvedDiscs);

    //assume discs > 0, then check if needs validation

    //ending solution solvedDiscs.lenght == discs; ????
  };

  //aux
  const getTop = (sourceArray: Disc[]) => sourceArray[sourceArray.length - 1];

  //TODO: use a proper data structure ;)

  return (
    <div className="App">
      <h1> Hanoi towers </h1>
      <UserInput />
      <HanoiArea />
    </div>
  );
}

export default App;
