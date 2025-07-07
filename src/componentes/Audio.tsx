import estilos from "./Audio.module.css";
import { useRef } from "react";
import musica from "../assets/audio.mp3";

function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMusic = () => {
    audioRef.current?.play();
  };

  const pauseMusic = () => {
    audioRef.current?.pause();
  };

  return (
    <div className={estilos.container}>
      <h3 className={estilos.titulo}>Música de Fundo:</h3>
      <audio ref={audioRef} src={musica} loop />
      <button onClick={playMusic} className={estilos.play}>Play</button>
      <button onClick={pauseMusic} className={estilos.pause}>Pause</button>
    </div>
  );
}

export default Audio;