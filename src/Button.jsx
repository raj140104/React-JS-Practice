function printHello() {
    console.log("Jai Shree Ram");
    console.log(event);
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
            <p onDoubleClick={printHello}>Double Click</p>
        </div>
    );
}