import React from 'react';
import Todo from './Todo';

const TodoList = ({todosList, setTodoList, filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { 
                    filteredTodos.map((todo, index) => {
                        return <Todo 
                                    key={index}
                                    name={todo.text}
                                    todo={todo}
                                    todosList={todosList}
                                    setTodoList={setTodoList}
                                />
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;