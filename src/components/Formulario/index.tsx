import React from "react";

export const Formulario = () => {
  return (
    <form>
      <input
        placeholder="Insira os nomes dos participantes"
        type="text"
        name="participante"
      />
      <button disabled={true}>adicionar</button>
    </form>
  );
};
