import React, { useState } from "react";
import "./App.css";

// Components
import Header from "./Components/Header/Header";
import Switch from "./Components/Switch/Switch";
import Message from "./Components/Message/Message";
import Footer from "./Components/Footer/Footer";

function App() {
  // ETATS
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="switches">
          <Switch setSwitch={setSwitch1} switchOn={switch1} />
          <Switch setSwitch={setSwitch2} switchOn={switch2} />
          <Switch setSwitch={setSwitch3} switchOn={switch3} />
        </div>
        <Message go={switch1 && switch2 && switch3} /> <Footer />
      </div>
    </div>
  );
}

export default App;
