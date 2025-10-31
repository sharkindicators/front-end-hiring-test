import { useState } from 'react';
import { Todo } from './types';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  // Bad naming practice: unclear variable names
  var [data1, setdata1] = useState<Todo[]>([]);
  var [filterText, setfilterText] = useState('');
  var [x, setX] = useState('all');

  // No validation or error handling
  var addTodo = (text: string, p: string) => {
    // Duplicate code - could be extracted
    var temp = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
      priority: p,
      createdAt: new Date().toISOString(),
    };
    var arr = [...data1];
    arr.push(temp);
    setdata1(arr);
  };

  var toggleTodo = (id: string) => {
    // Duplicate logic - inline everything
    var arr = [];
    for (var i = 0; i < data1.length; i++) {
      if (data1[i].id === id) {
        arr.push({ ...data1[i], completed: !data1[i].completed });
      } else {
        arr.push(data1[i]);
      }
    }
    setdata1(arr);
  };

  var deleteTodo = (id: string) => {
    // Yet another way to filter - inconsistent
    var temp = data1.filter((t) => t.id !== id);
    setdata1(temp);
  };

  // Duplicate filter logic instead of reusing
  var updateTodo = (id: string, newText: string) => {
    var arr = [];
    for (var i = 0; i < data1.length; i++) {
      if (data1[i].id === id) {
        arr.push({ ...data1[i], text: newText });
      } else {
        arr.push(data1[i]);
      }
    }
    setdata1(arr);
  };

  // Bad function name and duplicate filtering logic
  var doFilter = () => {
    var result = data1;

    // No validation on filterText
    if (filterText) {
      result = result.filter((t) => t.text.includes(filterText));
    }

    if (x === 'completed') {
      var arr = [];
      for (var i = 0; i < result.length; i++) {
        if (result[i].completed) {
          arr.push(result[i]);
        }
      }
      result = arr;
    } else if (x === 'active') {
      var arr = [];
      for (var i = 0; i < result.length; i++) {
        if (!result[i].completed) {
          arr.push(result[i]);
        }
      }
      result = arr;
    }

    return result;
  };

  var filtered = doFilter();

  return (
    <div className="app">
      <h1>📝 Todo App</h1>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search todos..."
          value={filterText}
          onChange={(e) => setfilterText(e.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">
          <button onClick={() => setX('all')} className="filter-btn">All</button>
          <button onClick={() => setX('active')} className="filter-btn">Active</button>
          <button onClick={() => setX('completed')} className="filter-btn">Completed</button>
        </div>
      </div>

      <AddTodo onAdd={addTodo} />
      <TodoList
        todos={filtered}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
}

export default App;
