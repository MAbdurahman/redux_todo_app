import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import styles from './../styles/modules/todoItem.module.scss';
import { getClasses } from './../utils/getClasses';
import ToDoModal from './ToDoModal';

export default function ToDoItem({ todo }) {
	//**************** variables ****************//
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
	const [updateModalOpen, setUpdateModalOpen] = useState(false);

	//**************** functions ****************//
   useEffect(() => {
      console.log('todo Item')
   }, []);

   const handleChecked = () => {
      console.log('handleChecked')
   }

   const handleDelete = () => {
      console.log('handleDelete')
   };
   const handleUpdate = () => {
      console.log('handleUpdate')
   };
	return (
		<>
			<div className={styles.item}>
				<div className={styles.todoDetails}>
					[ ]
					<div className={styles.texts}>
						<p
							className={getClasses([
								styles.todoText,
								todo.status === 'complete' &&
									styles['todoText--completed'],
							])}
						>
							{todo.title}
						</p>
						<p className={styles.time}>
							{format(new Date(todo.time), 'p, MM/dd/yyyy')}
						</p>
					</div>
				</div>
				<div className={styles.todoActions}>
					<div
						className={styles.icon}
						onClick={() => handleUpdate()}
						onKeyDown={() => handleUpdate()}
						tabIndex={0}
						role='button'
					>
						<MdEdit />
					</div>
					<div
						className={styles.icon}
						onClick={() => handleDelete()}
						onKeyDown={() => handleDelete()}
						tabIndex={0}
						role='button'
					>
						<MdDelete />
					</div>
				</div>
			</div>
		</>
	);
}
