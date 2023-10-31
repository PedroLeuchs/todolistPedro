import "./styles/style1.css";

import Todo from "./components/todo";
import { useState } from "react";
import Functions from "./components/functions";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Aprender React", category: "trabalho", completed: false },
    { id: 2, text: "Estudar Next.js", category: "trabalho", completed: false },
    {
      id: 3,
      text: "Ir para a academia",
      category: "pessoal",
      completed: false,
    },
    {
      id: 4,
      text: "Comprar mantimentos",
      category: "pessoal",
      completed: false,
    },
    { id: 5, text: "Preparar o jantar", category: "pessoal", completed: false },
    {
      id: 6,
      text: "Estudar para um exame",
      category: "estudo",
      completed: false,
    },
    {
      id: 7,
      text: "Escrever um post no blog",
      category: "trabalho",
      completed: false,
    },
    {
      id: 8,
      text: "Concluir um projeto",
      category: "trabalho",
      completed: false,
    },
    {
      id: 9,
      text: "Aprender um novo idioma",
      category: "estudo",
      completed: false,
    },
    {
      id: 10,
      text: "Ligar para um amigo",
      category: "pessoal",
      completed: false,
    },
    { id: 11, text: "Pagar contas", category: "pessoal", completed: false },
    {
      id: 12,
      text: "Assistir um filme",
      category: "pessoal",
      completed: false,
    },
    {
      id: 13,
      text: "Planejar uma viagem",
      category: "pessoal",
      completed: false,
    },
    {
      id: 14,
      text: "Estudar para um exame",
      category: "estudo",
      completed: false,
    },
    {
      id: 15,
      text: "Fazer trabalho voluntário",
      category: "trabalho",
      completed: false,
    },
    {
      id: 16,
      text: "Consertar o carro",
      category: "pessoal",
      completed: false,
    },
    {
      id: 17,
      text: "Visitar a família",
      category: "pessoal",
      completed: false,
    },
    {
      id: 18,
      text: "Fazer exercícios físicos",
      category: "pessoal",
      completed: false,
    },
    { id: 19, text: "Terminar um livro", category: "estudo", completed: false },
    {
      id: 20,
      text: "Iniciar um novo projeto",
      category: "trabalho",
      completed: false,
    },
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
        todo.completed = !todo.completed;
        console.log(todo);
      }
      return todo;
    });
    setTodos(mapArr);
  };

  const getBackgroundColor = (todo) => {
    return todo.completed ? "green" : ""; // Retorna "green" quando a tarefa estiver completa, vazio caso contrário
  };

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className="app">
      <div className="top">
        <p className="h1">Todo - List</p>
        <Functions
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          setSort={setSort}
          addTodo={addTodo}
        />
      </div>
      <div className="bottom">
        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "completed"
                ? todo.completed
                : !todo.completed
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <Todo
                getBackgroundColor={getBackgroundColor}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                key={todo.id}
                todo={todo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
