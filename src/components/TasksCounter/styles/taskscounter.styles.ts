import styled from "styled-components";
import { device } from "../../../styles/app.styles";
export const SCounter = styled.h1`
	margin: 0;
	font-size: 28px;
	font-weight: 700;
	color: #fff;
	grid-row: 3;
	grid-column: span 2;
	margin:0 0 0 5px;
	@media ${device.mobileM}{
	font-size: 22px;
	}
`