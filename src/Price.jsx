export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };

    let newStyle = {
        fontWeight: "bold",
    };
    return (
        <div>

            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>


        </div>
    )


}