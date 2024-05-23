import "./styles.css"
import  CarroImg from "../../assets/car-card 1.png"
import BuyButton from "../BuyButton";

export default function Card()
{
    return(
        <>
            <div className="card-container">
                <img src={CarroImg} alt="" className="card-img" />
                <p className="card-name">Audi Supra TT</p>
                <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                <BuyButton/>
            </div>
        </>    
    );
}