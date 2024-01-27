import { useEffect, useState } from "react"

function Timer() {
const [time, setTime] = useState(60)
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000)
      return ()=>clearTimeout(timer)
    }
  },[time])
  return (
    <>
      <p>Time Left:{ time} second</p>
    
    </>
  )
}

export default Timer