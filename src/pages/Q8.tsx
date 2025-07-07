import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img7 from '../assets/simb7.jpg';

const Q8 = () => {
  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");
  const [erro, setErro] = useState("");

  const navegacao = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === "vermelho") {
      alert("Resposta correta!");
      navegacao("/Final");
    } else {
      setErro("Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img7} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 8</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>A visão de vocês é tomada pelo vibrante _ _ _ _ _ _ _ _ sangue. O fedor pútrido e as víceras ainda quentes espalhadas pelo chão denunciam, sem piedade, o destino que os espera - uma morte lenta, úmida e cheia de agonia</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("É uma cor")}
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
export default Q8;