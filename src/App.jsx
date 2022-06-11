import { useState, useEffect } from "react";
import { Letter } from "./ui/atoms/Letter";
import { HiddenWord } from "./ui/atoms/HiddenWord";
import { Header } from "./ui/molecules/Header";

import { Hangman } from "./ui/atoms/Hangman";
import "./App.css";

import { words, letters } from "./assets/constants.js";

let bestRecord = window.localStorage.getItem("bestRecord") || 0;

function App() {
  const [lettersSelected, setLettersSelected] = useState({});
  const [intents, setIntents] = useState(6);
  const [word, setWord] = useState("");
  const [currentRecord, setCurrentRecord] = useState(0);

  const isWinner = word.split("").every((letter) => lettersSelected[letter]);

  const setRandomWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  useEffect(() => {
    setRandomWord();
  }, []);

  useEffect(() => {
    if (word && isWinner) {
      setCurrentRecord((newRecord) => {
        window.localStorage.setItem("bestRecord", newRecord + 1);
        return newRecord + 1;
      });
    }
  }, [isWinner]);

  const addLetter = (letter) => {
    if (lettersSelected[letter]) return false;
    setLettersSelected({ ...lettersSelected, [letter]: letter });
    if (!word.includes(letter)) {
      setIntents(intents - 1);
      if (intents <= 1) {
        setCurrentRecord(0);
      }
    }
  };

  const reset = () => {
    setLettersSelected({});
    setIntents(6);
    setRandomWord();
  };

  if (currentRecord > bestRecord) bestRecord = currentRecord;

  return (
    <div className="App">
      <Header currentRecord={currentRecord} bestRecord={bestRecord} />

      <Hangman intents={intents} />

      <HiddenWord
        intents={intents}
        word={word}
        lettersSelected={lettersSelected}
      />

      {intents > 0 && !isWinner ? (
        <div className="letters">
          {letters.map((letter) => (
            <Letter
              key={letter}
              letter={letter}
              active={!!lettersSelected[letter]}
              addLetter={addLetter}
            />
          ))}
        </div>
      ) : null}

      {isWinner ? <p className="game-over">Ganaste</p> : null}
      {intents <= 0 ? <p className="game-over">Game over</p> : null}

      <button
        className={isWinner ? "button-continue" : "button-reset"}
        onClick={reset}
      >
        {isWinner ? "Continue" : "Reiniciar"}
      </button>
    </div>
  );
}

export default App;
