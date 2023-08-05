import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Formulario } from "./paginas/Configuracao/components/Formulario";
import { Sorteio } from "paginas/Sorteio";
import { Configuracao } from "paginas/Configuracao";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
