import './App.css';
// import Home from './component/Home'
import Stoplight from "./component/Stoplight"

function App() {
  return (
    <div className="App">
      <div className="container d-flex flex-column text-center align-items-center">
        <Stoplight />
        <p className="mt-3">Click on a light!</p>
        <p className="m-5"> 
          Made by{" "}
          <a href="https://github.com/jessicabrinegar">Jessie B</a>, with
          love!
        </p>
		  </div>
    </div>
  );
}

export default App;
