import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import React, { useRef, useState } from "react";
import { useAdicionarParticipantes } from "../../../../state/hooks/useAdicionarParticipantes";
import { useMensagemDeErro } from "../../../../state/hooks/useMensagemDeErro";
import styles from "./Formulario.module.scss";

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
      <div className={styles.inputGroup}>
        <input
          ref={inputRef}
          value={participante}
          placeholder="Insira os nomes dos participantes"
          type="text"
          name="participante"
          onChange={(evento) => setParticipante(evento.target.value)}
        />
        <button disabled={!participante}>adicionar</button>
      </div>
      {mensagemDeErro && (
        <p className={styles.alertaErro} role="alert">
          {mensagemDeErro}
        </p>
      )}
    </form>
  );
};
