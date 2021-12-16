import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState({});
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=malaga&appid=0e617da6a7a588ca043db63ccdb1f64d"
    )
      .then((response) => response.json())
      .then((data) => setApiData(data));
  }, []);
  console.log(apiData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
