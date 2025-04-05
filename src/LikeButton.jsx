import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [clicks, setCount] = useState(0);

    let counting = () => {
        setCount(clicks + 1);
    }
    let toggleLike = () => {
        setIsLiked(!isLiked);
        setCount(clicks + 1);
    }

    let styles = { color: "red" }
    return (
        <div>
            <p onClick={toggleLike}>
                {
                    isLiked ? (<i class="fa-sharp fa-solid fa-heart" style={styles}></i>) : (<i className="fa-regular fa-heart" style={styles}></i>)
                }

            </p>
            <p>
                clicks = {clicks}
            </p>

        </div>
    )
}