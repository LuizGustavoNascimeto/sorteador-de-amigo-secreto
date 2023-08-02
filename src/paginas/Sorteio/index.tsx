import React, { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

export const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setparticipanteDaVez] = useState("");
  const [amigoSecreto, setamigoSecreto] = useState("");
  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setamigoSecreto(resultado.get(participanteDaVez)!);
    }
  };
  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          placeholder="selecione o seu nome"
          name="participanteDaVez"
          id="participanteDaVez"
          value={participanteDaVez}
          onChange={(evento) => setparticipanteDaVez(evento.target.value)}
        >
          {participantes.map((participante) => (
            <option key={participante} value={participante}>
              {participante}
            </option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};
