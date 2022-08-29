import { HashRouter } from "react-router-dom";
import { SideBar, sidebarWidth } from "./navigation/sidebar/SideBar";
import { AppRouter } from "./router/AppRouter";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <HashRouter>
          <SideBar />
          <div style={{ marginLeft: `${sidebarWidth + 1}%` }}>
            <AppRouter />
          </div>
        </HashRouter>
      </div>
    </div>
  );
}

export default App
