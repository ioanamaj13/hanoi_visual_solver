import { Peg } from "../types";

//aux
export const moveDisc = (
  disc: number,
  source: Peg,
  target: Peg,
  message: string
) => {
  source.contents = source.contents.slice(0, source.contents.length - 1);

  target.contents += disc.toString();

  //TODO: populate this with the move
  //   moveLog.push({
  //     disc: disc,
  //     source: { name: source.name, contents: source.contents },
  //     target: {
  //       name: target.name,
  //       contents: target.contents,
  //     },
  //     message: message,
  //   });

  //   console.log(moveLog);
};

export const CreateDiscs = (discs: number): Peg => {
  console.log(discs);
  let discsArray: string = "";

  if (discs >= 3 && discs < 10) {
    for (let idx = discs; idx > 0; idx--) {
      discsArray += idx.toString();
    }
  } else console.log("Discs must be between 3 and 9");

  return { name: "Source", contents: discsArray };
};
