import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Configuracao } from ".";

const mockNavigacao = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigacao,
  };
});

describe("a pagina de configuração", () => {
  test("deverá ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Configuracao />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
