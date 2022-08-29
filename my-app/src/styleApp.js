import styled from 'styled-components';

export const ListTask = styled.div`
	max-width: 1290px;
	width: 1209px;
	height: 958px;
	margin: 0 auto;
	border: 1px solid #000000;
	display: flex;
	.newTask {
		width: 500px;
		border-right: 1px solid #000000;
		height: 957px;
	}

	.todoList {
		width: 709px;
		padding: 35px 40px;
		margin: 0 auto;
		.titleList {
			color: #000000;
			font-size: 18px;
			line-height: 1px;
			display: flex;
			justify-content: center;
			margin-bottom: 45px;
		}
		.inputSearch {
			width: 627px;
			height: 33px;
			border: 1px solid #bdbdbd;
			border-radius: 5px;
			font-size: 12px;
			padding: 10px;
		}
	}
	.takeNote {
		width: 707px;
		height: 82px;
		background: #e0e0e0;
		border-top: 1px solid #000000;
		color: #333333;
		font-size: 15px;
		padding: 20px;
		.nameAction {
			width: 667px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.btn {
				.btnDone {
					width: 110px;
					height: 36px;
					color: #ffffff;
					font-size: 12px;
					font-weight: normal;
					font-style: normal;
					text-align: center;
					background: #2196f3;
					border: none;
					border-radius: 4px;
				}
				.btnRemove {
					width: 110px;
					height: 36px;
					color: #ffffff;
					font-size: 12px;
					font-weight: normal;
					font-style: normal;
					text-align: center;
					background: #d9534f;
					border: none;
					border-radius: 4px;
					margin-left: 20px;
				}
			}
		}
	}
	.viewTask {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.detail {
			width: 627px;
			height: 350px;
			border-bottom: 1px solid #000000;
			border-left: 1px solid #000000;
			border-right: 1px solid #000000;
			padding: 35px;
			.input {
				width: 555px;
				height: 31px;
				border: 1px solid #bdbdbd;
				border-radius: 5px;
				font-size: 12px;
				padding: 10px;
			}
			.description {
				margin-top: 20px;
				.textArea {
					border: 1px solid #000000;
					font-size: 12px;
				}
			}
			.option {
				margin-top: 20px;
				.datePicker {
					width: 242px;
					height: 32px;
					border: 1px solid #000000;
					font-size: 12px;
				}
				.piority {
					margin-left: 70px;
					.optionSelect {
						width: 242px;
						height: 32px;
						color: #000000;
						font-weight: normal;
						font-style: normal;
						padding: 2px;
						background: #ffffff;
						border: 1px solid #000000;
					}
				}
			}
			.btnUpdate {
				width: 555px;
				height: 32px;
				color: #ffffff;
				font-size: 15px;
				font-weight: normal;
				font-style: normal;
				text-decoration: none;
				text-align: center;
				background: #5cb85c;
				border: none;
				border-radius: 6px;
				margin-top: 25px;
			}
		}
	}
`;
export const Add = styled.div`
	padding: 35px 40px;
	width: 500px;
	margin: 0 auto;
	.title {
		color: #000000;
		font-size: 18px;
		line-height: 1px;
		display: flex;
		justify-content: center;
		margin-bottom: 45px;
	}
	.input {
		width: 420px;
		height: 30px;
		border: 1px solid #bdbdbd;
		border-radius: 5px;
		font-size: 12px;
		padding: 10px;
	}
	.textArea {
		border: 1px solid #000000;
		font-size: 12px;
	}

	.btnSubmit {
		width: 423px;
		height: 32px;
		color: #ffffff;
		font-size: 15px;
		font-weight: normal;
		font-style: normal;
		text-decoration: none;
		text-align: center;
		background: #5cb85c;
		border: none;
		border-radius: 6px;
		margin-top: 45px;
	}

	.option {
		margin-top: 20px;
		.datePicker {
			width: 192px;
			height: 32px;
			border: 1px solid #000000;
			font-size: 12px;
		}
		.piority {
			margin-left: 35px;
			.optionSelect {
				width: 192px;
				height: 32px;
				color: #000000;
				font-weight: normal;
				font-style: normal;
				padding: 2px;
				background: #ffffff;
				border: 1px solid #000000;
			}
		}
	}
	.description {
		margin-top: 20px;
	}
`;
export const Label = styled.div`
	font-size: 12px;
	font-weight: bold;
	font-style: normal;
	text-decoration: none;
`;
