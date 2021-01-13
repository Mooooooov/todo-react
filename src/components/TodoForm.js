import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o padrão, nesse caso ele evita que a pagina de reload toda vez que o input é acionado.
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Adicionar tarefa</button>
    </form>
  );
}

export default TodoForm;
