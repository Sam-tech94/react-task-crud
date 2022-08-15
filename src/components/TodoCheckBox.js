import "../styles/Check.css"

const TodoCheckBox = ({hideCompleted, setHideCompleted}) => {
  

    return (
      <>
        <div className='checkbox'>
          <input 
            type="checkbox" 
            className='check' 
            checked={hideCompleted}
            onChange={(e) => setHideCompleted(e.target.checked)}
          />
          <label>Hide completed</label>
        </div>
      </>
    );
};

export default TodoCheckBox;