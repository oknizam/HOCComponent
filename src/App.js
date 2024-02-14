import logo from './logo.svg';
import './App.css';
import useWindowSize from "./customHook"
import InputTextWithLog from './InputComponent';

function App() {
  const width = useWindowSize();
  return (
    <div className="App">
      <h2>Window width : {width}</h2>
      <InputTextWithLog onChange={(e) => console.log("onchnage func", e.target.value)} />
    </div>
  );
}

export default App;
