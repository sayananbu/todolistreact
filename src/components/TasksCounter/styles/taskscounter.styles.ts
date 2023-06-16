import styled from "styled-components";
import { device } from "../../../styles/app.styles";
export const SCounter = styled.h1`
	margin: 0;
	font-size: 28px;
	font-weight: 700;
	color: ${({theme})=>theme === 'dark' ? '#fff' : '#000'};
	grid-row: 3;
	grid-column: 1;
	margin:0 0 0 5px;
	@media ${device.mobileL}{
	font-size: 20px;
	text-align: center;
	}
	@media ${device.mobileM}{
	font-size: 20px;
	text-align: center;
	}
`