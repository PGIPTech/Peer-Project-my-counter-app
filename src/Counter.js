// Hasan El-haj, 02/06/2024; Implementing a Simple Counter App that can Count
import './Counter.css';
// Importing the UseState library from react for counter
import React, {useState} from "react";

//this function will call on the usestate to manage the counter and use buttons to increase and decrease the counter
function Counter() {
    // Implement the useState to manage the counter

    const [count, setCount] = useState(0);

    //button click functions and intializations
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(Math.max(count -1, 0)); // Implemented the math.max to prevent the counter from achiving a negative value
    const reset = () => setCount(0);

    return (
        // The Visual Button Elements 
        <div>
            <p> {count} </p>
            <button className="counter-increment" onClick={increment}>Increment</button>
            <button className="counter-decrement" onClick={decrement}>Decrement</button>
            <button className="counter-reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;