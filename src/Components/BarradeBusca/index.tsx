import "./styles.css"
import SearchButton from "../SearchButton";

export default function BarradeBusca()
{
    return(
        <>
            <div className="searchbar">
                <form>
                    <input type="text" name="procurar" placeholder="Digite sua busca"  className="search"/>
                </form>
                <SearchButton/>
            </div>
        </>
    );
}