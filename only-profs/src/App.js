import "./App.css";
import { UserContextProvider, UserContext } from "./UserContext";
import ProfHeader from "./components/ProfHeader";
import { getSessionCookie, setSessionCookie } from "./session";
import * as testing from "./back-end/testing";
// import * as func from "./back-end/functions";

// Front-end can use the above function imports
//func.signIn();

testing.getProfessorInfo();
function App() {
  setSessionCookie("test");

  return (
    <div className="App">
        <ProfHeader/>
    </div>
  );
}

export default App;
