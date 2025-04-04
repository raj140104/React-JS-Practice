function handleSubmit() {
    event.preventDefault();
    console.log("Form was submitted");
}


export default function Form() {
    return (
        <form action="">
            <input placeholder="write some thing" type="Search anything" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
