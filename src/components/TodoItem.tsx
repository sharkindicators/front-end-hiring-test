import { Todo } from '../types';
import './TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="delete-button">
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
