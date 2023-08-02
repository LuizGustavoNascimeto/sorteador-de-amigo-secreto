import React, { useState, useRef } from "react";
import { useAdicionarParticipantes } from "../../state/hooks/useAdicionarParticipantes";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";

export const Formulario = () => {
  const [participante, setParticipante] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipantes = useAdicionarParticipantes();
  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarParticipantes(participante);
    setParticipante("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={participante}
        placeholder="Insira os nomes dos participantes"
        type="text"
        name="participante"
        onChange={(evento) => setParticipante(evento.target.value)}
      />
      <button disabled={!participante}>adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
};
