import { render, screen } from "@testing-library/react";
import { Formulario } from ".";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(<Formulario />);
  //Desmontra qual o component sendo testado

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //recebe o input com o placeholder cidado, se ele existir
  const button = screen.getByRole("button");
  //recebe um botao qualquer no component
  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
  //Pergunta oq eeles deveriam estar fazendo ou qual estado eles deveria estar.
});
