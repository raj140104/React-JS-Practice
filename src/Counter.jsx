import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);

    let inCount = () => {
        setCount(count + 1);

    }

    return (
        <div><h3 >count = {count}</h3>
            <button onClick={inCount}>Increase count</button>
        </div>
    )
}