import { useState } from "react";
import Modal from "./Modal";
import "../styles/TodoItem.css"



const TodoItem = ({
    todo,
    deleteItem,
    onChange,
}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (

        <main>
            <div className="container">
                <div className="check1">
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={e => onChange({ ...todo, isCompleted: e.target.checked })
                        }
                    />
                </div>
                <div className="text">
                    <p style={todo.isCompleted ? { opacity: "0.6", textDecoration: "line-through" } : null}>{todo.text}</p>
                </div>
                <div className="close">
                    <button className='delete' onClick={() => setModalOpen(true)}>X</button>
                </div>
            </div>

            {modalOpen && <Modal todo={todo} deleteItem={deleteItem} setModalOpen={setModalOpen} />}
        </main>
    );
};

export default TodoItem;