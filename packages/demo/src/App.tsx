import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MovingBox } from 'movingbox';
import './App.css'
import {Square} from './Square';

function App() {
  const [isRow, setIsRow] = useState(false);
  const [isSuper, setSuper] = useState(false);

  return (
    <div className="App">
      <div>
        <MovingBox
          as="button"
          debugName="button"
          onClick={() => setIsRow(!isRow)}
        >
          toggle
        </MovingBox>
        <div
          className={`flex ${isRow ? "row" : ""} ${isSuper ? "super-gap" : ""}`}
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
  );
}

export default App
