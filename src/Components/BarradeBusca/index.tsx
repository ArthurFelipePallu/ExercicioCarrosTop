import "./styles.css"
import SearchButton from "../SearchButton";

export default function BarradeBusca()
{
    return(
        <>
            <div className="searchbar">
                <div className="search"> Search</div>
                <SearchButton/>
            </div>
        </>
    );
}