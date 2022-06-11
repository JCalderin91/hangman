export const HiddenWord = ({ word, intents, lettersSelected }) => {
  return (
    <p className="hidden-word">
      {intents > 0
        ? word
            .split("")
            .map((letter) => (lettersSelected[letter] ? letter : "_"))
        : word}
    </p>
  );
};
