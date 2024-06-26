import './App.css'
import { useState } from 'react';

function App() {
  //use of hooks in react
  const [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("value added", counter);
    if(counter<20)
    setCounter(counter + 1);
  }
  const decreaseValue = () => {
    console.log("value added", counter);
    if(counter>0)
    setCounter(counter -1);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>


      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value{counter}</button>



      <p><footer>Footer content={counter}</footer></p>
    </>
  )
}

export default App;
