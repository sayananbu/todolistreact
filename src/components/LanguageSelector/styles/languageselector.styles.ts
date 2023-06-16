import styled from "styled-components";
import { device } from "../../../styles/app.styles";

export const SLangSelect = styled.select`
	grid-row:3;
	grid-column:3;
	font-size: 18px;
	text-align: center;
	border-radius: 20px;
	height: 80%;
	align-self: center;
	width: 98%;

	@media ${device.mobileL} {
    }
    @media ${device.mobileM} {
    }
`