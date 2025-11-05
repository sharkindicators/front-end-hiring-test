import { Todo } from '../types';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {
  if (!todos) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  if (todos.length == 0) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  if (todos.length < 1) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
