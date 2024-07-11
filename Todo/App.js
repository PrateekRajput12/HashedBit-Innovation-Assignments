import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const root= ReactDOM.createRoot(document.getElementById("root"))

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() === '') return;

    const newTasks = [...tasks, inputValue.trim()].sort();
    setTasks(newTasks);
    setInputValue('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index).sort();
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

root.render(<App/>)
