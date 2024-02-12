// Hasan El-haj, Jesus Hernandez, Muhammad Siddiqui, Steve Hutchinson. 02/06/2024; Implementing a Simple Counter App that can Count
import "./Counter.css";
// Importing the UseState library from react for counter
import React, { useState } from "react";

//this function will call on the usestate to manage the counter and use buttons to increase and decrease the counter
function Counter() {
  // Implement the useState to manage the counter
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const increment = () => setCount((prevCount) => prevCount + 1);

  // Function to handle decrementing the count, with prevention of negative values
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));

  // Function to handle resetting the count
  const reset = () => setCount(0);

  return (
    // The Visual Button Elements
    <div>
      <p className="counter-number">{count}</p>
      <button className="counter-increment" onClick={increment}>
        +
      </button>
      <button className="counter-decrement" onClick={decrement}>
        -
      </button>
      <button className="counter-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
