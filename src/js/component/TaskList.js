import React from 'react';

function TaskList({ todos, removeTask }) {
  return (
    <ul>
      {todos.map(task => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => removeTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;