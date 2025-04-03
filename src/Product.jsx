import "./Product.css";


function Product({ title, price, features }) {
    const list = features?.map((feature, index) => <li key={index}>{feature}</li>);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h4>Price:{price}</h4>
            <p>{list}</p>

        </div>
    )
}
export default Product;