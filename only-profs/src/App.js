import "./App.css";
// import * as testing from "./back-end/testing";
// import * as func from "./back-end/functions";

// Front-end can use the above function imports
//func.signIn();
import { UserContextProvider, UserContext } from "./UserContext";
import ProfHeader from "./components/ProfHeader";
import { getSessionCookie, setSessionCookie } from "./session";
function App() {
  setSessionCookie("test");

  return (
    <div className="App">
        <ProfHeader/>
    </div>
  );
}

export default App;
