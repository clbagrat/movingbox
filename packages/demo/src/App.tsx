import "./App.css";
import { AddMove } from "./examples/AddMove";
import { ButtonModal } from "./examples/ButtonModal";
import { TwoLists } from "./examples/TwoLists";
import { SideBar, sidebarWidth } from "./navigation/sidebar/SideBar";

function App() {
  return (
    <div>
      <div className="App">
        <SideBar />
        <div style={{ marginLeft: `${sidebarWidth + 1}%` }}>
          <AddMove />
          <ButtonModal />
          <TwoLists />
        </div>
      </div>
    </div>
  );
}

export default App
