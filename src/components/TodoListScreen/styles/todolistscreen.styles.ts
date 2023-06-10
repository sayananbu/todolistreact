import styled from "styled-components";
import { device } from "../../../styles/app.styles";

export const STodoListContainer = styled.div`
    display: flex;
	position: relative;
	box-sizing: border-box;
    flex-direction: column;
	width: 800px;
	margin:20px auto;
  	height: 93%;
	@media ${device.mobileL}{
		width: 100%;
	}
	@media ${device.mobileM}{
		width: 100%;
	}
`;