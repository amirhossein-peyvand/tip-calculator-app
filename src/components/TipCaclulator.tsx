import "../sass/TipCalculator.scss";
import InputArea from "./InputArea";
import ScreenArea from "./ScreenArea";

const TipCaclulator = () => {
  return (
    <article className="tipCalculator">
      <InputArea />
      <ScreenArea />
    </article>
  );
};

export default TipCaclulator;
