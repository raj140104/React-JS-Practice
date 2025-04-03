import Product from "./Product";


function ProductTab() {

    let styles = {
        display: "flex",
        flexwrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <>

            <div style={styles}>

                <Product title="Logitech MX master" idx={0} />
                <Product title="Apple Pencil 2nd Zen" idx={1} />
                <Product title="Zebronics" idx={2} />
                <Product title="Boat earbud Z2" idx={3} />


            </div>

        </>
    )
}

export default ProductTab;