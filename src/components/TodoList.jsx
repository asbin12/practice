import { useState } from "react"

function TodoList() {

  const [items, setItems] = useState("")
  const [addItems,setAddItems]=useState([])
  

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setAddItems((prev)=>[...prev,items])
  // }
  const addTodo = () => {
    setAddItems(() => [...addItems, items]);
    setItems('');
  }
  const removeTodo = (i) => {
    const updatedTodos = addItems.filter((_,id) => id !== i)
    setAddItems(updatedTodos)
  }
  const removeAll=()=>{
    setAddItems([])
  }

  return (
    <>
      <h1>Todo List</h1>
      
        <input type="text" placeholder="enter your task"  onChange={(e)=>setItems(()=>e.target.value)} />
        <button onClick={addTodo}>Submit</button>
             <p>
    {addItems.map((items,i) => {
      return(
      <>
          <li key={i}>{items}</li>
          <button onClick={()=>removeTodo(i)}>Remove</button>
          <button onClick={removeAll}>Remove All</button>
      </>)
    })}
  </p>
 
    
    </>
  )
}

export default TodoList