import { useState } from "react"

function Input() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValue((prev) => {
      return{...prev,[name]:value}
    })
  }
  return (
    <>
      <form >
        <input type="text" name="name" placeholder="name" value={value.name} onChange={handleInput}/> <br />
        <input type="email" name="email" placeholder="email" value={value.email} onChange={handleInput}/><br />
        <input type="password" name="password" placeholder="password" value={value.password} onChange={handleInput}/><br />
        <button type="submit">Submit</button><br />
      </form>
      <p>`Name is {value.name} email is {value.email}`</p>
    
    </>
  )
}

export default Input