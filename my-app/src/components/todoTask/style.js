import styled from 'styled-components';

export const ListTodo = styled.div`
	width: 627px;
	height: 61px;
	border: 1px solid #000000;
	padding: 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 10px;
	.content {
		font-size: 16px;
		display: flex;
		align-items: center;
		.checkBox {
			width: 29px;
			height: 18px;
			margin-right: 20px;
		}
	}
	.btn {
		display: flex;
		.btnDetail {
			width: 93px;
			height: 27px;
			color: #ffffff;
			font-size: 12px;
			font-weight: normal;
			font-style: normal;
			text-decoration: none;
			text-align: center;
			background: #00bcd4;
			border: none;
			border-radius: 4px;
		}
		.btnRemove {
			width: 93px;
			height: 27px;
			color: #ffffff;
			font-size: 12px;
			font-weight: normal;
			font-style: normal;
			text-decoration: none;
			text-align: center;
			background: #d9534f;
			border: none;
			border-radius: 4px;
			margin-left: 20px;
		}
	}
`;
export const Label = styled.div`
	font-size: 12px;
	font-weight: bold;
	font-style: normal;
	text-decoration: none;
`;
