import { useState } from "react"


export default function LudoBoard() {
    let [move, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    let [count, setCount] = useState(0);

    let updateBlue = () => {
        setMove((prevMove) => {
            return { ...move, blue: move.blue + 1 }
        });
    };

    let updateYellow = () => {
        setMove((prevMove) => {
            return { ...move, yellow: move.yellow + 1 }
        });
    };

    return (
        <>
            <div className="LudoBoard">
                <p>Game Begins</p>
            </div>
            <div className="board">
                <p>Blue Moves = {move.blue}</p>
                <button style={{ background: "blue", color: "white" }} onClick={updateBlue}> +1 </button>
                <p>Yellow Moves = {move.yellow}</p>
                <button style={{ background: "yellow" }} onClick={updateYellow}>+1</button>
                <p>Green Moves = {move.green}</p>
                <button style={{ background: "green", color: "white" }}>+1</button>
                <p>Red Moves = {move.red}</p>
                <button style={{ background: "red", color: "white" }}>+1</button>

            </div>
        </>

    )
}