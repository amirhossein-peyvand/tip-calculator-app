import "../sass/ScreenArea.scss";

const ScreenArea = () => {
  return (
    <section className="screenArea">
      <div className="group">
        <div className="left">
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <p className="tipAmount">$0.00</p>
      </div>
      <div className="group">
        <div className="left">
          <span>Total</span>
          <span>/ person</span>
        </div>
        <p className="totalAmount">$0.00</p>
      </div>
      <button className="resetBtn">RESET</button>
    </section>
  );
};

export default ScreenArea;
