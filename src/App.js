import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react"; // Import useState hook
import Counter from "./Counter";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-Title">The Simple Counter</p>
        {/* Pass count, increment, decrement, and reset as props to Counter */}
        <Counter/>
        <div className="App-Names">
          <p>
            By Hasan El-haj, Jesus Hernandez, Muhammad Siddiqui, Steve
            Hutchinson.
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
