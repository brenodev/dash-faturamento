import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route exact path="/" component={Resumo} />
              <Route path="/consultas" component={Consultas} />
              <Route path="/faturamento" component={Faturamento} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
