import "./Product.css";


function Product({ title, price }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h4>Price:{price}</h4>
            {price > 30000 ? <p>"Discount of 5%"</p> : <a href="#">Get Discount</a>}

        </div>
    );


}
export default Product;