import styled from 'styled-components';
import { SInput } from '../../Header/styles/header.styles';

export const SAddTodoForm = styled.form`
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: space-evenly;
    grid-row: 1;
`;
export const SInputAdd = styled(SInput)`
    grid-column: 1;
`;
export const SButton = styled.button`
    border-radius: 15px;
    grid-column: 2;
    font-size: 18px;
    margin: 5px;
    border: none;
    cursor: pointer;
`;
