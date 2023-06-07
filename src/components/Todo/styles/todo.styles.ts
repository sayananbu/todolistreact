import styled from "styled-components";
import { SInput } from "../../Header/styles/header.styles";

export const STodoContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 50px;
	border: 1px solid #ccc;
	border-radius:8px;
	margin: 15px 0 0 0;
`
export const SCheckbox = styled.input`
	transform: scale(3);
`
export const STodoLabel = styled.label`
	margin: 0;
	font-size: 23px;
	color: #fff;
	width: 350px;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow-x: hidden;
`
export const STodoButton = styled.button`
	width: 100px;
	border-radius: 5px;
	height: 60%;
	border:none;
	color: #fff;
	font-size: 18px;
	cursor: pointer;
`
export const STodoEditButton = styled(STodoButton)`
	background-color:#3b9926;
`
export const STodoDeleteButton = styled(STodoButton)`
	background-color: #b32f1e;
`

export const SEditInput = styled(SInput)`
	width: 350px;
	margin: 0;
	padding: 0;
	height: 70%;
`