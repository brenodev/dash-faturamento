import React from "react";

// STYLE
import "./App.css";

// CUSTOM COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Resumo from "./components/Resumo/Resumo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Resumo />
    </div>
  );
}

export default App;
