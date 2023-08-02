import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de amigo secreto", () => {
  test("cada participante não tirou o próprio nome", () => {
    const participantes = [
      "joão",
      "lucas",
      "Naty",
      "Vini",
      "Brasil",
      "Colombia",
    ];
    const sorteio = realizarSorteio(participantes);
    participantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
