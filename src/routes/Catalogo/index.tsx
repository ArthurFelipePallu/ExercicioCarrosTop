import "./styles.css";
import Header from "../../Components/Header";
import BarradeBusca from "../../Components/BarradeBusca";
import Card from "../../Components/Card";

export default function Catalogo() {
  return (
    <>
      <Header />

      <section id="catalogo-section" className="container mg-top20 pdd-top40 ">
        <BarradeBusca />
        <div className="catalogo-card-container">
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
    </>
  );
}
