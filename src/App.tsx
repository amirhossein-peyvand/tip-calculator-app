import logo from "./assets/logo.svg";
import TipCaclulator from "./components/TipCaclulator";
import "./sass/App.scss";

function App() {
  return (
    <main className="mainContainer">
      <section className="logoContainer">
        <img src={logo} alt="logo" />
      </section>
      <TipCaclulator />
    </main>
  );
}

export default App;
