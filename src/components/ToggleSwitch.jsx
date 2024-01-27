import { useState } from "react"

function ToggleSwitch() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    
    setToggle(!toggle)
  }
  return (
    <>
      <label>
        <input type="checkbox" onChange={handleToggle}/>
      </label>
      <p>{toggle?'On': 'Off'}</p>
    </>
  )
}

export default ToggleSwitch