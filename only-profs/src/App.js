import './App.css';
// import * as testing from "./back-end/testing";
// import * as func from "./back-end/functions";


// Front-end can use the above function imports
//func.signIn();

import Header from './components/Header';
import ProfHeader from './components/ProfHeader';

function App() {
  return (
    <div className="App">
      <ProfHeader></ProfHeader>
    </div>
  );
}

export default App;
