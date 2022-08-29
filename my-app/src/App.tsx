import { Button, notification, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import TodoTask from './components/todoTask/TodoTask';
import { Add, Label, ListTask } from './styleApp';
import { ITask } from './type';

const App: React.FC = () => {
	const [taskName, setTaskName] = useState<string>('');
	const [detail, setDetail] = useState<string>('');
	const [deadline, setDealine] = useState(
		new Date().toISOString().substring(0, 10)
	);
	const [piority, setPiority] = useState<string>('normal');
	const [detailTask, setDetailTask] = useState<boolean>(false);
	const [todoList, setTodoList] = useState<ITask[]>([]);

	const toDay = new Date().toISOString().substring(0, 10);
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
		setTaskName('');
		setDetail('');
		setDealine(toDay);
		setPiority('');
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

	const completeTask = (taskNameToDelete: string): void => {
		setTodoList(
			todoList.filter((task) => {
				return task.taskName != taskNameToDelete;
			})
		);
		setDetailTask(false);
	};

	const handleChangeCheckbox = (taskNameCheck: string): void => {
		const newTodoList = todoList.map((task) => {
			if (task.taskName === taskNameCheck) {
				return { ...task, done: !task.done };
			}
			return task;
		});
		setTodoList(newTodoList);
	};

	const handleRemoveDone = () => {
		const new_arr = todoList.filter((task) => {
			return task.done !== true;
		});
		setTodoList(new_arr);
		setDetailTask(false);
	};

	const newListDone = todoList.map((task) => {
		if (task.done === true) {
			return task.taskName + '  ';
		}
		return;
	});

	const handleSearch = (e: any) => {
		const value = e.target.value;

		if (value && value.length > 0) {
			const todos = todoList.filter((task) => {
				return task.taskName.toLowerCase().includes(value);
			});
			setTodoList(todos);
		}
	};

	return (
		<ListTask>
			<div className='newTask'>
				<Add>
					<div className='title'>
						<h3>New Task</h3>
					</div>
					<div>
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
									onChange={handleChange}
									value={deadline}
									min={toDay}
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
					</div>
					<Button
						className='btnSubmit'
						htmlType='submit'
						onClick={handleSubmit}
					>
						Add
					</Button>
				</Add>
			</div>
			<div className='viewTask'>
				<div className='todoList'>
					<div className='titleList'>
						<h3>To Do List</h3>
					</div>
					<input
						type='text'
						placeholder='Search...'
						className='inputSearch'
						name='inputSearch'
						onChange={handleSearch}
					/>

					<div className='listTask'>
						{todoList.map((task: ITask, key: number) => {
							return (
								<TodoTask
									key={key}
									task={task}
									detailTask={detailTask}
									setDetailTask={setDetailTask}
									completeTask={completeTask}
									handleChangeCheckbox={handleChangeCheckbox}
								/>
							);
						})}
					</div>
				</div>
				<div className='takeNote'>
					<div className='nameAction'>
						<span>Bulk Action: {newListDone}</span>
						<div className='btn'>
							<button onClick={() => {}} className='btnDone'>
								Done
							</button>

							<button onClick={handleRemoveDone} className='btnRemove'>
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
		</ListTask>
	);
};
export default App;
