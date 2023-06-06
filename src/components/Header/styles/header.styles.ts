import styled from "styled-components";

export const SHeader = styled.div`
	display: grid;
	grid-template-columns: 30% 50% 20%;
	grid-template-rows: 33% 33% 33%;
	height: 150px;
	width: 100%;
`
export const SInput = styled.input`
	border-radius: 15px;
	border: none;
	margin: 5px;
	padding: 0 15px;
	font-size: 20px;
	text-align: center;
`
export const SInputAdd = styled(SInput)`
	grid-column: 2;
	grid-row: 1;
`
export const SInputSearch = styled(SInput)`
	grid-column: span 3;
	margin: 5px auto;
	width: 95%;
`

export const SButton = styled.button`
	border-radius:15px;
	grid-column: 3;
	font-size:18px;
	margin: 5px;
	border: none;
`
export const SSelect = styled.select`
	text-align: center;
	margin: 5px;
	border-radius: 15px;
	font-size:18px;
`
export const STitle = styled.h1`
	margin: 0;
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	grid-row: 3;
	grid-column: span 2;
	margin:0 0 0 5px;
`
