import "../styles/Modal.css"

const Modal = ({setModalOpen, deleteItem, todo}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    <h1>Are you sure you want to delete?</h1>
                </div>
                <div className="footer">
                    <button onClick={() => {deleteItem(todo.id); setModalOpen(false)} }>Yes</button>
                    <button onClick={() => setModalOpen(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;