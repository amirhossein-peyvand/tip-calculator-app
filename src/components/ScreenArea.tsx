import "../sass/ScreenArea.scss";
interface Props {
  totalPerPerson: number;
  tipPerPerson: number;
  onResetTotal: (value: number) => void;
  onResetTip: (value: number) => void;
}

const ScreenArea = ({
  totalPerPerson,
  tipPerPerson,
  onResetTip,
  onResetTotal,
}: Props) => {
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
            {tipPerPerson || "0.00"}
          </p>
        </div>
        <div className="group">
          <div className="left">
            <span>Total</span>
            <span>/ person</span>
          </div>
          <p className="totalAmount">
            <span>$</span>
            {totalPerPerson || "0.00"}
          </p>
        </div>
      </section>
      <button
        className="resetBtn"
        onClick={() => {
          onResetTip(0);
          onResetTotal(0);
        }}
      >
        RESET
      </button>
    </section>
  );
};

export default ScreenArea;
