import { MovingBox } from "movingbox";

type SquareProps = {
  color: "red" | "green"
};

export const Square = ({ color }: SquareProps) => {
  return <MovingBox style={{minWidth:"50px", height: `100px`, background: color}} />
};
