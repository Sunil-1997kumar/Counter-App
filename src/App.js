import { useState } from 'react';
import './App.css';

function App() {

  const [value, setVlaue] = useState(0)

  const handleOnClickMinus = () => {
    if (value != 0) {
      const newValue = value - 1;
      setVlaue(newValue);
    }
  }

  const handleOnClickPlus = () => {
    if (value == 10) {
      alert("Counter is Full")
    } else {
      const newValue = value + 1;
      setVlaue(newValue);
    }
  }
  return (
    <div className="App">
      <h2>Counter App</h2>
      <button onClick={handleOnClickMinus}>-</button>
      <p>{value}</p>
      <button onClick={handleOnClickPlus}>+</button>
    </div>
  );
}

export default App;
