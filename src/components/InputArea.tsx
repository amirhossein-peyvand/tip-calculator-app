import dolorSign from "../assets/icon-dollar.svg";
import "../sass/InputArea.scss";
import person from "../assets/icon-person.svg";

interface Props {
  onSetBill: (value: number) => void;
  onSetTipPercentage: (value: number) => void;
  onSetNumOfPeople: (value: number) => void;
}

const InputArea = ({
  onSetBill,
  onSetNumOfPeople,
  onSetTipPercentage,
}: Props) => {
  return (
    <section className="inputArea">
      <section className="billContainer">
        <label htmlFor="bill">Bill</label>
        <div>
          <img src={dolorSign} alt="dolorSign" />
          <input
            className="bill"
            id="bill"
            min={0}
            onChange={(event) => onSetBill(Number(event.target.value))}
            placeholder="0"
            type="number"
          />
        </div>
      </section>
      <section className="tipsPart">
        <span>Select Tip %</span>
        <div className="tipOptions">
          <button
            className="tipPercentage five"
            onClick={() => onSetTipPercentage(5)}
          >
            5%
          </button>
          <button
            className="tipPercentage ten"
            onClick={() => onSetTipPercentage(10)}
          >
            10%
          </button>
          <button
            className="tipPercentage fifteen"
            onClick={() => onSetTipPercentage(15)}
          >
            15%
          </button>
          <button
            className="tipPercentage twentyfive"
            onClick={() => onSetTipPercentage(25)}
          >
            25%
          </button>
          <button
            className="tipPercentage fifty"
            onClick={() => onSetTipPercentage(50)}
          >
            50%
          </button>
          <input
            className="tipPercentage custom"
            type="number"
            placeholder="Custom"
            onChange={(event) => onSetTipPercentage(Number(event.target.value))}
          />
        </div>
      </section>
      <section className="peopleArea">
        <label htmlFor="numOfPeople">Number of People</label>
        <div>
          <img src={person} alt="person" />
          <input
            onChange={(event) => onSetNumOfPeople(Number(event.target.value))}
            id="numOfPeople"
            min={0}
            placeholder="0"
            type="number"
          />
        </div>
      </section>
    </section>
  );
};

export default InputArea;
