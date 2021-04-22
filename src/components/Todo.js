import React from 'react';

const Todo = ({name, todo, todosList, setTodoList}) => {
    const deleteTodoHandler = event => {
        setTodoList(todosList.filter((currentTodo) => currentTodo.id !== todo.id));
    }

    const completeTodoHandler = () => {
        setTodoList(
            todosList.map((currentTodo) => {
                if(currentTodo.id === todo.id) {
                    return {
                        ...currentTodo,
                        completed: !currentTodo.completed,
                    }
                }
                return currentTodo;
            })
        )
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{ name }</li>
            <button className="complete-btn" onClick={completeTodoHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteTodoHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;