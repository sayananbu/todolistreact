import styled from "styled-components";
import { SInput } from "../../Header/styles/header.styles";

 export const SSearchAndFilterForm = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;
	justify-content: space-evenly;
	grid-row:2;
	width: 100%;
 `
 export const SSelect = styled.select`
 text-align: center;
 margin: 5px;
 border-radius: 15px;
 font-size:18px;
 grid-column:1;
`
export const SInputSearch = styled(SInput)`
	grid-column: 2;
	margin: 5px;
`