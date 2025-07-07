import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img2 from '../assets/simb2.jpg';

const Q3 = () => {
  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");
  const [erro, setErro] = useState("");

  const navegacao = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === "a verdade está...") {
      alert("Resposta correta!");
      navegacao("/Q4");
    } else {
      setErro("Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img2} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 3</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>Resolva o anagrama: vdadera. áset.e.</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("⬜ ⬜⬜⬜⬜⬜⬜⬜ ⬜⬜⬜...")}
          className={estilos.dicabutton}
        >
          Dica
        </button>

        <p className={estilos.dica}>{dica}</p>

        {erro && <p className={estilos.error}>{erro}</p>}

        <button type="submit" className={estilos.button}>Enviar</button>
      </form>
    </div>
  );
};
export default Q3;