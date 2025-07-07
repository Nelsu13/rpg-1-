import estilos from './pages_global.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from '../componentes/Timer';
import img6 from '../assets/simb6.jpg';

const Q7 = () => {
  const [senha, setSenha] = useState("");
  const [dica, setDica] = useState("");
  const [erro, setErro] = useState("");

  const navegacao = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha === "espelho") {
      alert("Resposta correta!");
      navegacao("/Q8");
    } else {
      setErro("Resposta incorreta. Tente novamente.");
    }
  };

  return (
    <div className={estilos.container}>
      <Timer />
      <img src={img6} className={estilos.imagem} />
      <h1 className={estilos.titulo}>Questão 7</h1>
      <form onSubmit={handleLogin} className={estilos.form}>

        <h2 className={estilos.titulo}>"Você sente que está sendo observado, mesmo estando em uma sala sem portas, janelas ou câmeras. Nessa sala há apenas uma vela, um espelho e um caderno em branco." Que objeto você deveria pegar para ver se realmente tem alguém te observando?</h2>

        <input
          placeholder="Resposta"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={estilos.resposta}
        />

        <button
          type="button"
          value={dica}
          onClick={() => setDica("Se por algum acaso trincar, sua visão sobre você, em conjunto se quebrará")}
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
export default Q7;