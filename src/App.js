import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Simple Counter 
        </p>
        <Counter />
        <div className="App-Names">  
        <p>
        By Hasan El-haj, Jesus Hernandez, Muhammad Siddiqui, Steve Hutchinson.
        </p>

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Using React.js
        </a>
      </header>

    </div>
  );
}

export default App;
