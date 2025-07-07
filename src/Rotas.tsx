import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Q1 from "./pages/Q1.tsx";
import Q2 from "./pages/Q2.tsx";
import Q3 from "./pages/Q3.tsx";
import Q4 from "./pages/Q4.tsx";
import Q5 from "./pages/Q5.tsx";
import Q6 from "./pages/Q6.tsx";
import Q7 from "./pages/Q7.tsx";
import Q8 from "./pages/Q8.tsx";
import Final from "./pages/final.tsx";
import Audio from "./componentes/Audio.tsx";

function Rotas() {
  return (
    <Router>
      <Audio />
      <Routes>
        <Route path="/" element={<Q1 />} />
        <Route path="Q2" element={<Q2 />} />
        <Route path="Q3" element={<Q3 />} />
        <Route path="Q4" element={<Q4 />} />
        <Route path="Q5" element={<Q5 />} />
        <Route path="Q6" element={<Q6 />} />
        <Route path="Q7" element={<Q7 />} />
        <Route path="Q8" element={<Q8 />} />
        <Route path="final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
