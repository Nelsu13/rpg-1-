import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img5 from '../assets/simb5.jpg';

const Q6 = () => {

  const navegacao = useNavigate();

  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");


  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navegacao("/Q7");
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img5} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 6</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>Sobre a resposta anterior, se você precisasse matar algum personagem de algum player dessa campanha, quem você mataria?</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("Resposta pessoal")}
          className={estilos.dicabutton}
        >
          Dica
        </button>
        <p className={estilos.dica}>{dica}</p>

        <button type="submit" className={estilos.button}>Enviar</button>
      </form>
    </div>
  );
};
export default Q6;