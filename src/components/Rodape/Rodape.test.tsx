import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Rodape } from ".";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

jest.mock("../../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

const mockSorteio = jest.fn();
const mockNavigacao = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigacao,
  };
});
jest.mock("../../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("quando não existem participantes o suficiente", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("...não deverá  começar a brincadeira", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.queryByRole("button");
    expect(button).toBeDisabled();
  });
});
describe("quando existem participantes o suficiente", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([
      "ana",
      "lindo",
      "linda",
    ]);
  });
  test("...deverá  começar a brincadeira", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
  test("...começou a brincadeira!", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockNavigacao).toHaveBeenCalledTimes(1);
    expect(mockNavigacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
