export const Letter = ({ letter, active, addLetter }) => {
  const handleClick = () => {
    addLetter(letter);
  };
  return (
    <div className={active ? "active letter" : "letter"} onClick={handleClick}>
      {letter}
    </div>
  );
};
