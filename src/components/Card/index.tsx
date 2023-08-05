import React from "react";
import style from "./Card.module.scss";

export const Card: React.FC = ({ children }) => {
  return (
    <div className={style.card}>
      <section className="secao">{children}</section>
    </div>
  );
};
