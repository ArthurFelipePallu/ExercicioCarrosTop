import "./styles.css";
import Header from "../../Components/Header";
import BarradeBusca from "../../Components/BarradeBusca";
import Card from "../../Components/Card";

export default function Catalogo() {
  return (
    <>
      <Header />

      <main className="ct-catalogo-main">
        <section
          id="ct-catalogo-section"
          className="ct-container mg-top20 pdd-top40 "
        >
          <BarradeBusca />
          <div className="ct-catalogo-card-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
