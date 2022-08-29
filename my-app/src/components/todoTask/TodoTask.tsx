import React, { useState } from 'react';
import { Button, notification, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { ITask } from '../../type';
import { Label, ListTodo } from './style';

interface Props {
	task: ITask;
	completeTask(taskNameToDelete: string): void;
	handleChangeCheckbox(taskNameCheck: string): any;
	detailTask: any;
	setDetailTask: any;
}

const TodoTask = ({
	task,
	completeTask,
	handleChangeCheckbox,
	detailTask,
	setDetailTask,
}: Props) => {
	const [taskName, setTaskName] = useState<string>(`${task.taskName}`);
	const [detail, setDetail] = useState<string>(`${task.detailTask}`);
	const [deadline, setDealine] = useState(`${task.deadlineTask}`);
	const [piority, setPiority] = useState<string>(`${task.piorityTask}`);
	const [todoList, setTodoList] = useState<ITask[]>([]);
	const handleDetail = () => {
		setDetailTask(!detailTask);
	};
	const handleSubmit = () => {
		if (taskName.length === 0 || taskName === undefined) {
			return notification.open({
				message: 'Error',
				description: 'Task title is a required field.',
			});
		}
		const newTask = {
			taskName: taskName,
			detailTask: detail,
			piorityTask: piority,
			deadlineTask: deadline,
		};
		setTodoList([...todoList, newTask]);
		return notification.open({
			message: 'Success',
			description: 'Update successfull',
		});
	};

	const handleChange = (e: any) => {
		if (e.target.name === 'addTask') {
			setTaskName(e.target.value);
		} else if (e.target.name === 'description') {
			setDetail(e.target.value);
		} else if (e.target.name === 'date') {
			setDealine(e.target.value);
		} else {
			setPiority(e.target.value);
		}
	};
	return (
		<>
			<ListTodo>
				<div className='content'>
					<input
						type='checkbox'
						className='checkBox'
						onChange={() => {
							handleChangeCheckbox(task.taskName);
						}}
						checked={task.done}
					/>
					<span>{task.taskName}</span>
				</div>
				<div className='btn'>
					<button onClick={handleDetail} className='btnDetail'>
						Detail
					</button>

					<button
						onClick={() => {
							completeTask(task.taskName);
						}}
						className='btnRemove'
					>
						Remove
					</button>
				</div>
			</ListTodo>
			{detailTask ? (
				<div className='detail'>
					<input
						type='text'
						placeholder='Add new task...'
						className='input'
						value={taskName}
						name='addTask'
						required
						onChange={handleChange}
					/>
					<div className='description'>
						<Label>Description</Label>
						<TextArea
							rows={4}
							name='description'
							className='textArea'
							value={detail}
							onChange={handleChange}
						/>
					</div>
					<Row className='option'>
						<div>
							<Label>Due Date</Label>
							<input
								className='datePicker'
								type='date'
								name='date'
								id='date'
								value={deadline}
								onChange={handleChange}
								defaultValue={new Date().toISOString().substring(0, 10)}
								min={new Date().toISOString().substring(0, 10)}
							/>
						</div>
						<div className='piority'>
							<Label>Piority</Label>
							<select
								className='optionSelect'
								name='select'
								id='optionSelect'
								value={piority}
								onChange={handleChange}
							>
								<option value='normal'>Normal</option>
								<option value='low'>Low</option>
								<option value='high'>High</option>
							</select>
						</div>
					</Row>
					<Button
						className='btnUpdate'
						htmlType='submit'
						onClick={handleSubmit}
					>
						Update
					</Button>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default TodoTask;
