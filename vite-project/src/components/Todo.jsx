import React, { useState } from 'react';
import { counterContext } from '../context/context';
const ToDoList = ({name, usage}) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

return (
  <div className="todo">
    <h2>Todo for <br/>{name}</h2>
    <h3>*{usage}<br/>Work*</h3>
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a new task"
    />
    <button id='add' onClick={addTask}>Add</button> 
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(index)}
          >
            {task.text}
            <button id='delete'onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>Delete</button>
          </li>
        ))
      ) : (
        <li>No tasks yet!</li>
      )}
    </ul>
  </div>
);

};

export default ToDoList;
