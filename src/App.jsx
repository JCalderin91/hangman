import { useState, useEffect } from "react";
import { Letter } from "./ui/atoms/Letter";
import "./App.css";

const words =
  "Demolicion,Llorar,Bikini,Interesante,Armonia,Lugar,Cinturon,Pause,Necrotico,Pelea,puños,Sierra,metales,Destructivo,Absorbente,Golpear,Semental,Fornicador,Ofensor,Formulacion,Responsable,Sashay,Calibracion,Fabrica,Despierto,Sillon,Grasa,Pezuñas,Colision,Asombroso,Aleta,Conducir,Coordinado,Abierto,Critico,regreso,casa,Raro,Nacidos,tierra,Justificar,Adelante,Espia"
    .toUpperCase()
    .split(",");

function App() {
  const [lettersSelected, setLettersSelected] = useState("");
  const [intents, setIntents] = useState(5);
  const [word, setWord] = useState("");

  const setRandomWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  };
  useEffect(() => {
    setRandomWord();
  }, [words]);

  const addLetter = (letter) => {
    setLettersSelected(lettersSelected + letter);
    if (!word.includes(letter)) {
      setIntents(intents - 1);
    }
  };

  const reset = () => {
    setLettersSelected([5]);
    setIntents(5);
    setRandomWord();
  };
  return (
    <div className="App">
      Intentos restantes: {intents}
      <p className="hidden-word">
        {intents > 0
          ? word
              .split("")
              .map((letter) =>
                lettersSelected.includes(letter) ? letter : "_"
              )
          : word}
      </p>
      {intents > 0 ? (
        <div className="letters">
          {"abcdefghijklmnñopqrstuvwxyz"
            .toLocaleUpperCase()
            .split("")
            .map((letter) => {
              const active = lettersSelected.includes(letter);
              return (
                <Letter
                  key={letter}
                  letter={letter}
                  active={active}
                  addLetter={addLetter}
                />
              );
            })}
        </div>
      ) : (
        <p className="game-over">Game over</p>
      )}
      <button className="reset" onClick={reset}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;