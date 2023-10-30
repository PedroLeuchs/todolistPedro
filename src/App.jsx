import "./styles/style1.css";

import Todo from "./components/todo";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", category: "work", completed: false },
    { id: 2, text: "Learn Next.js", category: "work", completed: false },
    { id: 3, text: "Learn Next.js", category: "work", completed: false },
    { id: 4, text: "Learn Next.js", category: "work", completed: false },
    { id: 5, text: "Learn Next.js", category: "work", completed: false },
  ]);

  const addTodo = (value, category) => {
    const contId = todos.length + 1;
    const newTodo = {
      id: contId,
      text: value,
      category: category,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);
  };

  const removeTodo = (id) => {
    const removeArr = todos.filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };
  const completeTodo = (id) => {
    const mapArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed === true
          ? (todo.completed = !todo.completed)
          : (todo);
        console.log(todo);
      }
      return todo;
    });
    setTodos(mapArr);
  };

  const getBackgroundColor = (todo) => {
    // console.log("Completed:", todo.completed); // Verifique o valor de "completed"
    return todo.completed ? "green" : ""; // Retorna "green" quando a tarefa estiver completa, vazio caso contrário
  };

  return (
    <div className="app">
      <div className="top">
        <p className="h1">Todo - List</p>
      </div>
      <div className="bottom">
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo
              getBackgroundColor={getBackgroundColor}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
