import styled from "styled-components";

export const STodoList = styled.div`
	display: block;
	width: 100%;
	height:100%;
	overflow-y: scroll;
	overflow-x: hidden;
	box-sizing: border-box;
	padding: 15px 30px;
	::-webkit-scrollbar{
		background-color: transparent;
		width: 10px;
	}
	::-webkit-scrollbar-thumb{
		background-color: #fff;
		border-radius: 15px;
	}
`