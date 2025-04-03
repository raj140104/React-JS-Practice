function printHello() {
    console.log("Jai Shree Ram");
}
function printBye() {
    console.log("BYE");
}

export default function Button() {

    return (
        <div>
            <button onClick={printHello}>Click Here</button>
            <p onMouseOver={printBye}>This is for event demo</p>
            <p onDoubleClick={printBye}>This is for event demo</p>
        </div>
    );
}