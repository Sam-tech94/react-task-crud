import { useEffect, useState } from 'react';
import '../App.css';
import TodoCheckBox from './TodoCheckBox';
import ToDoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("localTodo")) {
            const storedList = JSON.parse(localStorage.getItem("localTodo"));

            setTodos(storedList);
        }
    }, []);

    const addTodo = (todo) => {
        const newTodo = [todo, ...todos];

        localStorage.setItem("localTodo", JSON.stringify([todo, ...todos]));

        setTodos(newTodo);

        console.log(newTodo)
    };

    const deleteItem = id => {
        let removeItem = [...todos].filter(todo => todo.id !== id);
        
        setTodos(removeItem)

        localStorage.setItem("localTodo", JSON.stringify(removeItem));
    };

    const onChange = (newTodo) => {
        const newTodoList = todos.map(todo => {
            if (todo.id === newTodo.id) {
                return newTodo
            } else {
                return todo;
            }
        })
        setTodos(newTodoList)

        console.log(newTodoList)
    };


    return (
        <div className="todoList">
         <TodoCheckBox hideCompleted={hideCompleted} setHideCompleted={setHideCompleted} />
         <ToDoForm onSubmit={addTodo}/>
        {
            todos.map((todo, index) => (
                todo.isCompleted === true && hideCompleted === true ? null :
                <TodoItem 
                    key={index}
                    todo={todo}
                    deleteItem={deleteItem}
                    onChange={onChange}
                />
            ))
        }
        </div>
    );
};

export default TodoList;