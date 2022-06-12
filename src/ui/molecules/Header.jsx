import { Crow } from "../atoms/Crow";
import { Star } from "../atoms/Star";

export const Header = ({ currentRecord, bestRecord }) => {
  return (
    <header className="header">
      <div className="current-record">
        <Star /> Record actual: {currentRecord}
      </div>
      <div className="best-record">
        <Crow /> Mejor puntaje: {bestRecord}
      </div>
    </header>
  );
};
