import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodoList] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	// Run only once when initial loading
	useEffect(() => {
		console.log('First time!');
		getLocalTodos();
	}, []);
	
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	}

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	
	const getLocalTodos = () => {
		if(localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodoList(todoLocal);
		}
	}

	return (
		<div className="App">
			<header>
				<h1>Todo List</h1>				
			</header>
			<div>
				<Form
					inputText={inputText}
					todos={todos}
					setTodoList={setTodoList}
					setInputText={setInputText}
					status={status}
					setStatus={setStatus}
				/>
				<TodoList
					todosList={todos}
					filteredTodos={filteredTodos}
					setTodoList={setTodoList}
				/>
			</div>
		</div>
	);
}

export default App;