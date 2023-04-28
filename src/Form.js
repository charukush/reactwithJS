import React from "react";
import { ReactDOM } from "react-dom";

function MyForm(){
    return(
        <form>
            <label>Enter Name:
                <input type= "text" />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default MyForm;