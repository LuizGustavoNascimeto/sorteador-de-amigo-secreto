import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";

export const Rodape = () => {
  const listaParticipantes = useListaParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();

  const roletarAmigoSecreto = () => {
    sortear();
    navigate("/sorteio");
  };

  return (
    <footer>
      <button
        onClick={roletarAmigoSecreto}
        disabled={listaParticipantes.length < 3}
      >
        Começar brincadeira
      </button>
    </footer>
  );
};
