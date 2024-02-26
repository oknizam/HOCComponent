import logo from './logo.svg';
import './App.css';
import useWindowSize from "./customHook"
import InputTextWithLog from './InputComponent';
import CounterHocOne from './components/CounterOne';
import CounterHocTwo from './components/CounterTwo';


function App() {
  const width = useWindowSize();
  return (
    <div className="App">
      {/* <h2>Window width : {width}</h2>
      <InputTextWithLog onChange={(e) => console.log("onchnage func", e.target.value)} /> */}
      <CounterHocOne/>
      <CounterHocTwo/>
    </div>
  );
}

export default App;
