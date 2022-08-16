import "./App.css";
import { AddMove } from "./examples/AddMove";
import { ButtonModal } from "./examples/ButtonModal";
import { TwoLists } from "./examples/TwoLists";

function App() {
  return (
    <div>
      <div className="App">
        <AddMove />
        <ButtonModal />
        <TwoLists />
      </div>
    </div>
  );
}

export default App
