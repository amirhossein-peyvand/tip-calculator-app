import { useState } from "react";
import "../sass/TipCalculator.scss";
import InputArea from "./InputArea";
import ScreenArea from "./ScreenArea";

const TipCaclulator = () => {
  const [bill, setBill] = useState(0);
  return (
    <article className="tipCalculator">
      <InputArea onSetBill={(value: number) => setBill(value)} />
      <ScreenArea bill={bill} />
    </article>
  );
};

export default TipCaclulator;
