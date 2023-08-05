import logo from "../../imagens/logo.png";
import participanteImg from "imagens/participante.png";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.cabecalho}>
      <img className={style.imagemLogo} src={logo} alt="Logo do Sorteador" />
      <img
        className={style.participante}
        src={participanteImg}
        alt="Participante com um presente na mão"
      />
    </header>
  );
};
