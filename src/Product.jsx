import "./Product.css";
import Price from "./Price";


function Product({ title, idx }) {
    let oldPrice = ["12,433", "89,00", "2100", "9389"];
    let newPrice = ["12,000", "89,343", "2300", "939"];

    let des = ["8000 DPI", "Intiutive", "Designed for tab", "Best Audio Quality"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{des[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />

        </div>
    );


}
export default Product;