import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput]: any = useState("");
  const [todo, setTodo]: any = useState([]);
  console.log(todo)
  

  return (
   <div className="container">
    <h1>Todo List</h1>
    <input type="text" name="task" id="task" placeholder='Add a task' value={input} onChange={(event) => {
      setInput(event.target.value)
    }}/>

    <button onClick={() => {
      setTodo([...todo, input])
      setInput("")
    }}>+</button>

    <ul>
      {todo.map((item:any, key:any) => {
        return(
          <li key={key}>{item}</li>
        )
      })}
    </ul>

   </div>
  )
}

export default App
