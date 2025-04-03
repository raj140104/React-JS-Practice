import Product from "./Product";


function ProductTab() {

    let options2 = ["hi-tech", "durable", "fast"];
    //let options2 = { a: "high-tech", b: "durable", c: "fast" };
    return (
        <>
            <Product title="Phone" price={10000} features={options2} />
            <Product title="Tab" price={5000} />
            <Product title="Mobile" price={1000} />


        </>
    )
}

export default ProductTab;