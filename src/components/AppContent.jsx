import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './../styles/modules/app.module.scss';
import ToDoItem from './ToDoItem';

export default function AppContent() {
	//**************** variables ****************//
	const todoList = useSelector(state => state.todo.todoList);
	// const filterStatus = useSelector(state => state.todo.filterStatus);

	const sortedTodoList = [...todoList];
	sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
	return (
		<div className={styles.content__wrapper}>
			{sortedTodoList && sortedTodoList.length > 0 ?  
			( sortedTodoList.map((todo) => <ToDoItem key={todo.id} todo={todo} />)):
			('No ToDos')}
		</div>
	);
}
