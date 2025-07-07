import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img4 from '../assets/simb4.jpg';

const Q5 = () => {
  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");
  const [erro, setErro] = useState("");

  const navegacao = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === "morte") {
      alert("Resposta correta!");
      navegacao("/Q6");
    } else {
      setErro("Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img4} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 5</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>Uma coisa que sempre aparece nos meus RPGs</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("Aconteceu com o Yuki, Baal, Jaen e a Eli")}
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
export default Q5;