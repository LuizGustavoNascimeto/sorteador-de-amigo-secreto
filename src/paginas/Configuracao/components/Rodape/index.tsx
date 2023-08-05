import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "state/hooks/useListaParticipantes";
import { useSorteador } from "state/hooks/useSorteador";
import styles from "./Rodape.module.scss";
import sacolas from "imagens/sacolas.png";

export const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();

  const roletarAmigoSecreto = () => {
    sortear();
    navigate("/sorteio");
  };

  return (
    <footer className={styles.rodape}>
      <button
        onClick={roletarAmigoSecreto}
        disabled={listaParticipantes.length < 3}
      >
        Começar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras" />
    </footer>
  );
};
