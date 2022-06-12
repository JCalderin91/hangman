export const HiddenWord = ({ word, intents, lettersSelected }) => {
  return (
    <div className="hidden-word">
      {word.split("").map((letter) => (
        <div className="letter">
          {lettersSelected[letter] ? letter : intents > 0 ? "_" : letter}
        </div>
      ))}
    </div>
  );
};
