import { MovingBox } from "movingbox";

type SquareProps = {
  color: "red" | "blue"
} & Record<string, any>;

const colorMap = {
  red: "#F34C3F",
  blue: "#362fba"
}

export const Square = ({ color, ...rest }: SquareProps) => {
  return (
    <MovingBox
      {...rest}
      fromFade
      from={{ yDelta: 0, xDelta: 0, heightRatio: 0.4, widthRatio: 1 }}
      style={{
        minWidth: "50px",
        height: `100px`,
        background: colorMap[color],
        border: "1px solid #645959",
        marginBottom: '10px'
      }}
    />
  );
};
