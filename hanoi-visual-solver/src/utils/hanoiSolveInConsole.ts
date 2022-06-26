import { Peg } from "../types";
import { moveDisc } from "./shared";

//TODO: check data s
export const hanoiSolveInConsole = function (
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
  console.log(message);
  moveDisc(discs, source, destination, message);
  hanoiSolveInConsole(aux, destination, source, discs - 1);
};
