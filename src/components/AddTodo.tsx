import { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  onAdd: (text: string, priority: string) => void;
}

function AddTodo({ onAdd }: AddTodoProps) {
  // Bad naming practices
  var [val, setval] = useState('');
  var [p, setp] = useState('medium');

  // No validation - allows empty strings, XSS, etc.
  var handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No validation at all!
    onAdd(val, p);
    setval('');
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={val}
        onChange={(e) => setval(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />

      <select
        value={p}
        onChange={(e) => setp(e.target.value)}
        className="priority-select"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
