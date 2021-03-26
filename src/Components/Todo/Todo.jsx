import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'
import { Pagination } from '../Pagination'
import parse from 'parse-link-header'
import styles from './Todo.module.css'
import { Spinner } from '../Common/Spinner'

function Todo() {
	// you can also maintain separate isLoading, and isError states
	const [todos, setTodos] = useState({
		isLoading: false,
		data: [],
		isError: false
	})
	const [page, setPage] = useState(1)
	const [pageLinks, setPageLinks] = useState({})

	const getTodos = (page = 1, limit = 5) => {
		// define function
	}

	const handleAdd = (title) => {
		// define function
	}

	const handleToggle = (id, status) => {
		// define function
	}

	const handleDelete = (id) => {
		// define function
	}

	useEffect(() => {
		getTodos()
	}, [])

	return (
		<div className={styles.todoContainer}>
			<TodoInput handleSubmit={handleAdd} />

			<TodoList handleToggle={handleToggle} handleDelete={handleDelete} data={todos.data} />
			<div className={styles.spinnerContainer}>{todos.isLoading && <Spinner />}</div>
			<Pagination
				currentPage={page}
				pageLinks={pageLinks !== null && pageLinks}
				onChange={({ _limit, _page }) => {
					// define function
				}}
			/>
		</div>
	)
}

export default Todo
