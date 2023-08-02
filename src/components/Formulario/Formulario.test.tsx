import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Formulario } from ".";
import { act } from "react-dom/test-utils";

test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
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

test("Adicionar um participante caso exista um nome", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  //Desmontra qual o component sendo testado

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //recebe o input com o placeholder cidado, se ele existir
  const button = screen.getByRole("button");

  //inserir valor no input
  fireEvent.change(input, {
    target: {
      value: "Jahpodi Aomossar Silva",
    },
  });
  //clicar no botão submit
  fireEvent.click(button);

  //garantir que o input esteja com o foco ativo
  expect(input).toHaveFocus();
  //garantir que o input não tenha valor?
  expect(input).toHaveValue("");
});
test("nomes duplicados não podem né man", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  //Desmontra qual o component sendo testado

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //recebe o input com o placeholder cidado, se ele existir
  const button = screen.getByRole("button");

  //inserir valor no input
  fireEvent.change(input, {
    target: {
      value: "Jahpodi Aomossar Silva",
    },
  });
  //clicar no botão submit
  fireEvent.click(button);
  fireEvent.change(input, {
    target: {
      value: "Jahpodi Aomossar Silva",
    },
  });
  //clicar no botão submit
  fireEvent.click(button);

  const mensagemDeErro = screen.getByRole("alert");
  expect(mensagemDeErro.textContent).toBe(
    "Nomes duplicados não são permitidos!"
  );
});
test("A mensagem de erro sumiu seguindo o timer?", () => {
  jest.useFakeTimers();
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  //Desmontra qual o component sendo testado

  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  //recebe o input com o placeholder cidado, se ele existir
  const button = screen.getByRole("button");

  //inserir valor no input
  fireEvent.change(input, {
    target: {
      value: "Jahpodi Aomossar Silva",
    },
  });
  //clicar no botão submit
  fireEvent.click(button);
  fireEvent.change(input, {
    target: {
      value: "Jahpodi Aomossar Silva",
    },
  });
  //clicar no botão submit
  fireEvent.click(button);

  let mensagemDeErro = screen.queryByRole("alert");
  expect(mensagemDeErro).toBeInTheDocument();

  //esperar o timer
  act(() => {
    jest.runAllTimers();
  });
  mensagemDeErro = screen.queryByRole("alert");

  expect(mensagemDeErro).toBeNull();
});
