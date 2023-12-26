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
      <div></div>
      <div></div>
    </section>
  );
};

export default InputArea;
