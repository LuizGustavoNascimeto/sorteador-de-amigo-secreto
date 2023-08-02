import { useSetRecoilState, useRecoilValue } from "recoil";
import { erroState, listaDeParticipantesState } from "../atom";
import { useMensagemDeErro } from "./useMensagemDeErro";

export const useAdicionarParticipantes = () => {
  const setLista = useSetRecoilState(listaDeParticipantesState);
  const lista = useRecoilValue(listaDeParticipantesState);
  const setMensagemDeErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setMensagemDeErro("Nomes duplicados não são permitidos!");
      setTimeout(() => {
        setMensagemDeErro("");
      }, 5000);
      return;
    }
    return setLista((listaAntiga) => [...listaAntiga, nomeDoParticipante]);
  };
};
