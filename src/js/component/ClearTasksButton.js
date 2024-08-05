import React from 'react';

function ClearTasksButton({ clearAllTasks }) {
  return <button onClick={clearAllTasks}>Clear All Tasks</button>;
}

export default ClearTasksButton;
