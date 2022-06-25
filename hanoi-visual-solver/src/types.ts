export type Peg = {
  name: string;
  contents: string;
};

export type RecordedMove = {
  disc: number;
  source: Peg;
  target: Peg;
  message: string;
};
