import styled from "styled-components";
import { device } from "../styles/app.styles";
export const STodoButton = styled.button`
    width: 90%;
    border-radius: 5px;
    height: 80%;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
	@media ${device.mobileL}{
		font-size: 12px;
	}
	@media ${device.mobileM}{
		font-size: 12px;
	}
`;