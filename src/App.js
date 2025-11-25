import { useRef, useState } from 'react';
import './App.css';

function App() {
   const [todos, setTodos] = useState([]);
   const inputRef=useRef();

  const handleAddTodo=()=>{
    const text=inputRef.current.value;
    const newItem={completed:false,text}
    const exists = todos.some(todo => todo.text === newItem.text);
    if(exists||text==="")
      return;

    setTodos([...todos,newItem]);
    inputRef.current.value=""; 
  }
  const handleItemDone=(index)=>{
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);
  }
  const handleOnDeleteClick=(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }




  return (
    <div className="App">
      <h2>To do List</h2>
        <div className='to-do-container'>
      <ul>
           {
            todos.map(({text,completed}, index)=>{
            return <div className="item">
                  <li key={index} className={completed ? "done" : ""} onClick={()=>handleItemDone(index)}>{text}</li>
                  <span className="trash" onClick={()=>handleOnDeleteClick(index)}>❌</span>
            </div> 
          })}
      
      </ul>
        </div>
      <input ref={inputRef} placeholder='Enter Item'/>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
