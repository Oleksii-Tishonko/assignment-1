import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect runs');
    const timerId = setInterval(() =>{
      setCounter((prevValue) => prevValue + 1);
    }, 3000);

    return () => {clearInterval(timerId)};
  }, []);

  return (
    <>
    <div className='counter'>{counter}</div>
    <div className='actionPanel'>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
    </>
  )
}

export default App
