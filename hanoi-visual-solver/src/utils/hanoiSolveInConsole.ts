import { Peg } from "../types";
import { moveDisc } from "./shared";
//TODO: check data structure for this
export const hanoiSolveInConsole = function (
  source: Peg,
  destination: Peg,
  aux: Peg,
  discs: number,
  log: string[] = []
) {
  if (discs <= 0) {
    return;
  }
  hanoiSolveInConsole(source, aux, destination, discs - 1, log);
  let message = `Move Disk ${discs} from ${source.name.toUpperCase()} to ${destination.name.toUpperCase()}`;
  // console.log(message);

  // console.log(
  //   `Move Disk ${discs} from ${source.name.toUpperCase()} to ${destination.name.toUpperCase()}`
  // );

  moveDisc(discs, source, destination, message);
  log.push(
    `Move Disk ${discs} from ${source.name.toUpperCase()} to ${destination.name.toUpperCase()}`
  );
  hanoiSolveInConsole(aux, destination, source, discs - 1, log);
};
