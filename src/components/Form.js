import React from 'react';

const Form = ({ setInputText, setTodoList, todos, inputText, setStatus, status}) => {
    const inputTextHandler = event => {
        setInputText(event.target.value)
	};

    const submitTodoHandler = event => {
        event.preventDefault();
        if(inputText === "") {
            alert("Enter Todo!")
            return false;
        }

        setTodoList([
            ...todos,
            { 
                text: inputText,
                id: Math.random() * 1000,
                completed: false 
            }
        ]);
        setInputText("");
    }

    const statusHandler = event => {
        setStatus(event.target.value);
    }

    return(
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;