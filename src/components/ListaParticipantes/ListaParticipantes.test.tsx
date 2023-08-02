import { RecoilRoot } from "recoil";
import { ListaParticipantes } from ".";
import { render, screen } from "@testing-library/react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

jest.mock("../../state/hooks/useListaParticipantes", () => {
  return {
    useListaParticipantes: jest.fn(),
  };
});

describe("Uma lista de participantes...", () => {
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("... deverá ser renderizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});
describe("Uma lista de participantes...", () => {
  const participantes = ["ANa", "joão"];
  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("... deverá ser renderizada com dois elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.getAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
