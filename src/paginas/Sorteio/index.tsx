import { Card } from "components/Card";
import aviao from "imagens/aviao.png";
import React, { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";
import styles from "./Sorteio.module.scss";

export const Sorteio = () => {
  const participantes = useListaParticipantes();
  const [participanteDaVez, setparticipanteDaVez] = useState(participantes[0]);
  const [amigoSecreto, setamigoSecreto] = useState("");
  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setamigoSecreto(resultado.get(participanteDaVez)!);
    }
  };
  return (
    <Card>
      <section className={styles.sorteio}>
        <h2>Quem vai tirar o papelzinho?</h2>
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
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button>Sortear</button>
        </form>
        {amigoSecreto && (
          <p className={styles.resultado} role="alert">
            {amigoSecreto}
          </p>
        )}
        <footer>
          <img src={aviao} alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>
  );
};
