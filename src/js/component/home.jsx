import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import ClearTasksButton from './ClearTasksButton';



function App() {
	const [todos, setTodos] = useState([]);
  
	useEffect(() => {
	  fetch('https://playground.4geeks.com/todo/user/andrecortes')
		.then(resp => resp.json())
		.then(data => setTodos(data.todos))
		.catch(error => console.error('Error fetching tasks:', error));
	}, []);
  
	const addTask = (newTask) => {
	  const updatedTodos = [...todos, newTask];
	  setTodos(updatedTodos);
	};
  
	const removeTask = (taskId) => {
	  const updatedTodos = todos.filter(task => task.id !== taskId);
	  setTodos(updatedTodos);
	  // Sync with backend
	};
  
	const clearAllTasks = () => {
	  fetch('https://playground.4geeks.com/todo/user/andrecortes', {
		method: 'DELETE',
	  })
	  .then(resp => resp.json())
	  .then(() => setTodos([]))
	  .catch(error => console.error('Error clearing tasks:', error));
	};
  
	return (
	  <div>
		<TaskForm addTask={addTask} />
		<TaskList todos={todos} removeTask={removeTask} />
		<ClearTasksButton clearAllTasks={clearAllTasks} />
	  </div>
	);
  }
  
  export default App;