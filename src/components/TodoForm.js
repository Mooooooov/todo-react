import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value); // <- Esse aqui é o caminho do input do formulário
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o padrão, nesse caso ele evita que a pagina de reload toda vez que o input é acionado.

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput(""); // A função desse setInput aqui é limpar o input a cada vez que o botão for acionado.
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button">Adicionar tarefa</button>
    </form>
  );
}

export default TodoForm;
