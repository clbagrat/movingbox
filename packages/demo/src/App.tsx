import { useState } from "react";
import { MovingBox, MovingBoxContextProvider } from "movingbox";
import "./App.css";
import { Square } from "./Square";

function App() {
  const [isRow, setIsRow] = useState(false);
  const [isSuper, setSuper] = useState(false);
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
    <MovingBoxContextProvider>
      <div className="App">
        <div className="columns">
          <div>
            <MovingBox as="h1">Left</MovingBox>
            <div>
              {left.length &&
                left.map(({ id }) => (
                  <Square
                    key={id}
                    animKey={id}
                    color="red"
                    onClick={() => {
                      let f = left.find((o) => o.id === id);
                      setLeft(left.filter((o) => o !== f));
                      if (f) {
                        setRight([...right, f!]);
                      }
                    }}
                  />
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
                  color="green"
                  onClick={() => {
                    let f = right.find((o) => o.id === id);
                    setRight(right.filter((o) => o !== f));
                    if (f) {
                      setLeft([f, ...left]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <MovingBox
            as="button"
            debugName="button"
            onClick={() => setIsRow(!isRow)}
          >
            toggle
          </MovingBox>
          <div
            className={`flex ${isRow ? "row" : ""} ${
              isSuper ? "super-gap" : ""
            }`}
          >
            <Square color="red" />
            <Square color="green" />
            <Square color="red" />
          </div>
          <MovingBox as="button" onClick={() => setSuper(!isSuper)}>
            toggle gap
          </MovingBox>
        </div>
      </div>
    </MovingBoxContextProvider>
  );
}

export default App
