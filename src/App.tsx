import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/sorteio" element={<Formulario />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
