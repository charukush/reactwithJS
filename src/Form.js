import {useState} from "react";

function MyForm(){
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`this is a name: ${name}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Name:
                <input type= "text" value = {name} onChange = {(e) => setName(e.target.value)}/>
            </label>
            <input type="submit" />
        </form>
    )
}

export default MyForm;