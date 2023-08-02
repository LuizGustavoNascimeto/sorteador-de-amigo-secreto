import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

export const ListaParticipantes = () => {
  const participantes: string[] = useListaParticipantes();
  return (
    <ul>
      {participantes.map((participante) => (
        //role é desnecessária devido ao padrão das tags HTML
        <li role="listitem" key={participante}>
          {participante}
        </li>
      ))}
    </ul>
  );
};
