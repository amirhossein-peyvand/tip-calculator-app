import "../sass/ScreenArea.scss";
interface Props {
  bill: number;
}

const ScreenArea = ({ bill }: Props) => {
  return (
    <section className="screenArea">
      <section>
        <div className="group">
          <div className="left">
            <span>Tip Amount</span>
            <span>/ person</span>
          </div>
          <p className="tipAmount">
            <span>$</span>
            0.00
          </p>
        </div>
        <div className="group">
          <div className="left">
            <span>Total</span>
            <span>/ person</span>
          </div>
          <p className="totalAmount">
            <span>$</span>
            {bill || "0.00"}
          </p>
        </div>
      </section>
      <button className="resetBtn">RESET</button>
    </section>
  );
};

export default ScreenArea;
