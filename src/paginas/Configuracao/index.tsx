import { Card } from "components/Card";
import { Formulario } from "./components/Formulario";
import { ListaParticipantes } from "./components/ListaParticipantes";
import { Rodape } from "./components/Rodape";
import styles from "./Configuração.module.scss";

export const Configuracao = () => {
  return (
    <Card>
      <h2>Vamos Começar!</h2>
      <Formulario />
      <ListaParticipantes />
      <Rodape />
    </Card>
  );
};
