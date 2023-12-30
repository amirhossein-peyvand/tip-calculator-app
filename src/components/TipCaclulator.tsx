import { useState } from "react";
import "../sass/TipCalculator.scss";
import InputArea from "./InputArea";
import ScreenArea from "./ScreenArea";

const TipCaclulator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numOfPeople, setNumOfPeople] = useState(0);

  function calculateTip(
    bill: number,
    tipPercentage: number,
    numberOfPeople: number
  ) {
    // Calculate tip per person
    const tipPerPerson = (bill * (tipPercentage / 100)) / numberOfPeople;

    // Calculate total amount per person (including tip)
    const totalPerPerson = bill / numberOfPeople + tipPerPerson;

    // Return the results
    return {
      tipPerPerson: Number(tipPerPerson.toFixed(2)),
      totalPerPerson: Number(totalPerPerson.toFixed(2)),
    };
  }

  const { tipPerPerson, totalPerPerson } = calculateTip(
    bill,
    tipPercentage,
    numOfPeople
  );

  return (
    <article className="tipCalculator">
      <InputArea
        onSetBill={(value) => setBill(value)}
        onSetNumOfPeople={(value) => setNumOfPeople(value)}
        onSetTipPercentage={(value) => setTipPercentage(value)}
      />
      <ScreenArea totalPerPerson={totalPerPerson} tipPerPerson={tipPerPerson} />
    </article>
  );
};

export default TipCaclulator;
