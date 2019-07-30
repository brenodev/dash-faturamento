import React from "react";

// STYLE
import "./App.css";

// CUSTOM COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Resumo from "./components/Resumo/Resumo";
import Consultas from "./components/Consultas/Consultas";
import Faturamento from "./components/Faturamento/Faturamento";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Resumo />
      <Consultas />
      <Faturamento />
    </div>
  );
}

export default App;
