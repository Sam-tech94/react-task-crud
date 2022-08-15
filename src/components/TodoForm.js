import { useState } from "react";
import "../styles/Form.css"

const ToDoForm = ({onSubmit}) => {
    const [input, setInput] = useState("");
    const [validate, setValidate] = useState("");
    

    const handleChange = (e) => {
        if (e.target.value.length >= 54) {
            setValidate("Task content can contain max 54 characters");
        } else if (e.target.value.length <= 54) {
            setValidate("");
        }

        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() !== "") {
            onSubmit({
            id: String(Math.random()),
            text: input,
            isCompleted: false
        })
        }

        setInput("")
    };

    return (
        <>
         <form className="form" onSubmit={handleSubmit}>
            <div className="task">Task</div>
            <div className="div1">
                <div className="inadd">
                    <input 
                        type="text" 
                        id="input" 
                        placeholder='Write here' 
                        value={input}
                        onChange={handleChange}
                        autoComplete="off" 
                    />
                    {validate && <div className="validate">{validate}</div>}
                </div>
                <div className="add1">
                    <button className="addBtn">Add</button>
                </div>
            </div>
          </form>
        </>
    );
};

export default ToDoForm;