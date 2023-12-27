import dolorSign from "../assets/icon-dollar.svg";
import "../sass/InputArea.scss";

const InputArea = () => {
  return (
    <section className="inputArea">
      <section className="billContainer">
        <label htmlFor="bill">Bill</label>
        <div>
          <img src={dolorSign} alt="dolorSign" />
          <input id="bill" className="bill" type="number" placeholder="0" />
        </div>
      </section>
      <section className="tipsPart">
        <span>Select Tip %</span>
        <div className="tipOptions">
          <button className="tipPercentage five">5%</button>
          <button className="tipPercentage ten">10%</button>
          <button className="tipPercentage fifteen">15%</button>
          <button className="tipPercentage twentyfive">25%</button>
          <button className="tipPercentage fifty">50%</button>
          <button className="tipPercentage custom">Custom</button>
        </div>
      </section>
      <div></div>
    </section>
  );
};

export default InputArea;
