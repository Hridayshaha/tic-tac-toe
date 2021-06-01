import React from "react";
import "./App.css";
import Game from "./components/Game";

const App = () => {
  return (
    <div className="container">
      <h2 className="heading">Tic Tac Toe</h2>
      <Game />
    </div>
  );
};

export default App;
