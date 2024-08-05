import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText) {
      addTask({ id: Date.now(), text: taskText });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
