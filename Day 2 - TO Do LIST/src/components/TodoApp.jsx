import { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    setTodos([
      {
        id: Date.now(),
        text,
        completed: false,
      },
      ...todos,
    ]);

    setText("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div className="page">
      <div className="card">
        <div className="header">
          <div>
            <h1>Todo Dashboard</h1>
            <p>Kelola aktivitas harianmu dengan mudah.</p>
          </div>

          <div className="stats">
            <div>
              <h2>{todos.length}</h2>
              <span>Total</span>
            </div>

            <div>
              <h2>{completed}</h2>
              <span>Selesai</span>
            </div>
          </div>
        </div>

        <form onSubmit={addTodo} className="form">
          <input
            type="text"
            placeholder="Tambahkan aktivitas..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit">
            + Tambah
          </button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty">
              <h3>Belum ada aktivitas</h3>
              <p>Tambahkan tugas pertamamu.</p>
            </div>
          ) : (
            todos.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />

                  <span
                    className={
                      todo.completed ? "done" : ""
                    }
                  >
                    {todo.text}
                  </span>
                </label>

                <button
                  className="delete"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Hapus
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;