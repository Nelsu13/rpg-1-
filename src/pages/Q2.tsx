import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img1 from '../assets/simb1.jpg';

const Q2 = () => {
  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");
  const [erro, setErro] = useState("");

  const navegacao = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === "eli") {
      alert("Resposta correta!");
      navegacao("/Q3");
    } else {
      setErro("Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img1} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 2</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>Quem "perdeu" a cabeça?</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("Essa pessoinha tocava piano")}
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
export default Q2;