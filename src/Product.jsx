import "./Product.css";


function Product({ title, price = 1 }) {

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h4>Price:{price}</h4>
        </div>
    )
}
export default Product;