import estilos from '../pages/pages_global.module.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DURATION_MINUTES = 10;
const DURATION_MS = DURATION_MINUTES * 60 * 1000;
const STORAGE_KEY = "sessionStartTime";

const Timer: React.FC = () =>  {
    const [timeLeft, setTimeLeft] = useState(DURATION_MS);
  const navigate = useNavigate();

  useEffect(() => {
    const now = Date.now();
    let stored = localStorage.getItem(STORAGE_KEY);
    let startTime: number;

    if (stored) {
      startTime = parseInt(stored);
    } else {
      startTime = now;
      localStorage.setItem(STORAGE_KEY, startTime.toString());
    }

    const elapsed = now - startTime;
    const remaining = DURATION_MS - elapsed;

    if (remaining <= 0) {
      navigate("/");
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    setTimeLeft(remaining);

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const remaining = DURATION_MS - elapsed;

      if (remaining <= 0) {
        clearInterval(interval);
        navigate("/");
        localStorage.removeItem(STORAGE_KEY);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

    return (
        <div className={estilos.container}>
            <h1 className={estilos.texto}>Tempo restante: {formatTime(timeLeft)}</h1>
        </div>
    );
}
export default Timer;