import { useState, useEffect } from "react";
import { Letter } from "./ui/atoms/Letter";
import "./App.css";

const words =
  "Demolicion,Llorar,Bikini,Interesante,Armonia,Lugar,Cinturon,Pause,Necrotico,Pelea,puños,Sierra,metales,Destructivo,Absorbente,Golpear,Semental,Fornicador,Ofensor,Formulacion,Responsable,Sashay,Calibracion,Fabrica,Despierto,Sillon,Grasa,Pezuñas,Colision,Asombroso,Aleta,Conducir,Coordinado,Abierto,Critico,regreso,casa,Raro,Nacidos,tierra,Justificar,Adelante,Espia"
    .toUpperCase()
    .split(",");

let bestRecord = window.localStorage.getItem("bestRecord") || 0;

function App() {
  const [lettersSelected, setLettersSelected] = useState("");
  const [intents, setIntents] = useState(5);
  const [word, setWord] = useState("");
  const [currentRecord, setCurrentRecord] = useState(0);

  const isWinner = !word
    .split("")
    .filter((letter) => !lettersSelected.includes(letter)).length;

  const setRandomWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  };
  useEffect(() => {
    setRandomWord();
  }, []);

  useEffect(() => {
    if (word && isWinner) {
      console.log("setCurrentRecord", isWinner);
      setCurrentRecord((newRecord) => {
        window.localStorage.setItem("bestRecord", newRecord + 1);
        return newRecord + 1;
      });
    }
  }, [isWinner]);

  const addLetter = (letter) => {
    if (lettersSelected.includes(letter)) return false;
    setLettersSelected(lettersSelected + letter);
    if (!word.includes(letter)) {
      setIntents(intents - 1);
      console.log({ intents });
      if (intents <= 1) {
        setCurrentRecord(0);
      }
    }
  };

  const reset = () => {
    setLettersSelected([5]);
    setIntents(5);
    setRandomWord();
  };

  if (currentRecord > bestRecord) bestRecord = currentRecord;

  return (
    <div className="App">
      <header className="header">
        <div className="current-record">Record actual: {currentRecord}</div>
        <div className="best-record">Mejor record: {bestRecord}</div>
      </header>
      <div className="intents">Intentos restantes: {intents}</div>
      <p className="hidden-word">
        {intents > 0
          ? word
              .split("")
              .map((letter) =>
                lettersSelected.includes(letter) ? letter : "_"
              )
          : word}
      </p>
      {intents > 0 && !isWinner ? (
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
      ) : null}

      {isWinner ? <p className="game-over">Ganaste</p> : null}
      {intents <= 0 ? <p className="game-over">Game over</p> : null}
      <button className="reset" onClick={reset}>
        Reiniciar
      </button>
    </div>
  );
}

export default App;
