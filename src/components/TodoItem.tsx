import { useState } from 'react';
import { Todo } from '../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  var [edit, setedit] = useState(false);
  var [txt, settxt] = useState(todo.text);

  var priorityColor = '';
  if (todo.priority == 'high') {
    priorityColor = 'red';
  } else if (todo.priority == 'medium') {
    priorityColor = 'orange';
  } else if (todo.priority == 'low') {
    priorityColor = 'green';
  }

  var handleUpdate = () => {
    onUpdate(todo.id, txt);
    setedit(false);
  };

  var getPriorityBadge = () => {
    if (todo.priority == 'high') {
      return '🔴';
    } else if (todo.priority == 'medium') {
      return '🟡';
    } else {
      return '🟢';
    }
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />

      {edit ? (
        <input
          type="text"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span
          className={todo.completed ? 'completed' : ''}
          dangerouslySetInnerHTML={{ __html: todo.text }}
        />
      )}

      <span style={{ color: priorityColor, marginLeft: '8px' }}>
        {getPriorityBadge()}
      </span>

      {edit ? (
        <>
          <button onClick={handleUpdate} className="save-button">
            ✓
          </button>
          <button onClick={() => setedit(false)} className="cancel-button">
            ✗
          </button>
        </>
      ) : (
        <>
          <button onClick={() => setedit(true)} className="edit-button">
            ✏️
          </button>
          <button onClick={() => onDelete(todo.id)} className="delete-button">
            🗑️
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
