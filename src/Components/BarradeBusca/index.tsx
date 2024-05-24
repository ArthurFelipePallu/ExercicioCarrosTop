import "./styles.css";

export default function BarradeBusca() {
  return (
    <>
      <div className="ct-searchbar">
        <form>
          <input
            type="text"
            name="procurar"
            placeholder="Digite sua busca"
            className="ct-search"
          />

          <button type="submit" className="ct-search-button">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}
