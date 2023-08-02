import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Sorteio } from ".";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

jest.mock("../../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});
jest.mock("../../state/hooks/useResultadoDoSorteio", () => {
  return {
    useResultadoDoSorteio: jest.fn(),
  };
});

describe("a pagina do sorteio", () => {
  const participantes = ["Ana", "Beatriz", "Brasil"];

  const resultado = new Map([
    ["Ana", "Jorel"],
    ["Jorel", "Catarina"],
    ["Catarina", "Ana"],
  ]);
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoDoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length);
  });
  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();
  });
});
