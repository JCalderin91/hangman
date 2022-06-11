export const Header = ({ currentRecord, bestRecord }) => {
  return (
    <header className="header">
      <div className="current-record">Record actual: {currentRecord}</div>
      <div className="best-record">Mejor puntaje: {bestRecord}</div>
    </header>
  );
};
