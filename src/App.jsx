import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    console.log('useEffect runs');

    let timerId = null;
    if(running){
      timerId = setInterval(() =>{
        setCounter(counter + 1);
      }, 3000);
    }

    return () => {clearInterval(timerId)};
  }, [counter, running]);

  return (
    <>
    <div className='counter'>{counter}</div>
    <div className='actionPanel'>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
    </div>
    </>
  )
}

export default App
