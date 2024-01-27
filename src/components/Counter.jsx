import {useState} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleIncre = () => {
    counter===20?alert("Cannot Increment"):setCounter(counter+1)
  }
  const handleDecre = () => {
   counter===0?alert("Cannot decrement"): setCounter(counter-1)
  }
  return (
    <>
      {counter}
      <button onClick={handleIncre}>Incre</button>
      <button onClick={handleDecre}>Decre</button>
    </>
  )
}

export default Counter