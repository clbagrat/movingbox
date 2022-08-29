import { useState } from 'react';
import { MovingBox } from "movingbox";
import { Square } from "../Square";

export const TwoLists = () => {

  const [left, setLeft] = useState([
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  const [right, setRight] = useState([{ id: 3 }, { id: 4 }]);

  return (
    <div className="columns">
      <div>
        <MovingBox as="h1" debugName="left">
          Left
        </MovingBox>
        <div>
          {
            left.map(({ id }) => (
              <Square
                key={id}
                debugName={id === 1 ? "targetBox" : undefined}
                animKey={id}
                color="#362fba"
                onClick={() => {
                  let f = left.find((o) => o.id === id);
                  setLeft(left.filter((o) => o !== f));
                  if (f) {
                    setRight([...right, f!]);
                  }
                }}
              >
                {id}
              </Square>
            ))}
        </div>
      </div>
      <div>
        <MovingBox as="h1">Right</MovingBox>
        <div>
          {right.map(({ id }) => (
            <Square
              animKey={id}
              key={id}
              color="#F34C3F"
              onClick={() => {
                let f = right.find((o) => o.id === id);
                setRight(right.filter((o) => o !== f));
                if (f) {
                  setLeft([f, ...left]);
                }
              }}
            >
              {id}
            </Square>
          ))}
        </div>
      </div>
    </div>
  );
}
