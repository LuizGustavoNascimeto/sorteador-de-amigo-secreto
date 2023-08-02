import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";
import { useListaParticipantes } from "./useListaParticipantes";

export const useSorteador = () => {
  const participantes = useListaParticipantes();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
