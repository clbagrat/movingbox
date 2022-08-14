import "./examples.css";
import { MovingBox } from "movingbox";
import { useState } from "react";
import { Stack } from "../layout/Stack";
import { Inline } from "../layout/Inline";

export const AddMove = () => {
  const [ current, setCurrent ] = useState(2);
  const [ isReverse, setIsReverse] = useState(false);
  const [ isFade, setIsFade] = useState(false);
  const [ isFromRight, setIsFromRight] = useState(false);

  return (
    <div className="center">
      <Stack size="m">
        <Inline size="m">
          <button onClick={() => setCurrent(current + 1)}>Add</button>
          <label>
            Reverse
            <input
              type="checkbox"
              checked={isReverse}
              onChange={(e) => {
                setIsReverse(e.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Fade
            <input
              type="checkbox"
              checked={isFade}
              onChange={(e) => {
                setIsFade(e.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Right
            <input
              type="checkbox"
              checked={isFromRight}
              onChange={(e) => {
                setIsFromRight(e.currentTarget.checked);
              }}
            />
          </label>
        </Inline>
        <Stack size="s" reverse={isReverse}>
          {new Array(current).fill("").map((_, index) => {
            return (
              <MovingBox
                as={"div"}
                debugName={index.toString()}
                from={{
                  heightRatio: 0,
                  xDelta: isFromRight ? 250 : 0,
                }}
                fromFade={isFade}
                className="square"
                key={index}
              >
                {index}
              </MovingBox>
            );
          })}
        </Stack>
      </Stack>
    </div>
  );
}
