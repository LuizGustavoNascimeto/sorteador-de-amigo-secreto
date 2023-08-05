import { useListaParticipantes } from "state/hooks/useListaParticipantes";
import styles from "./ListaParticipantes.module.scss"

export const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();
  return (
    <ul className={styles.listaParticipantes}>
      {participantes.map((participante) => (
        //role é desnecessária devido ao padrão das tags HTML
        <li role="listitem" key={participante}>
          {participante}
        </li>
      ))}
    </ul>
  );
};
