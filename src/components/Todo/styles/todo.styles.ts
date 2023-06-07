import styled from 'styled-components';
import { SInput } from '../../Header/styles/header.styles';

export const STodoContainer = styled.div`
    display: grid;
    grid-template-columns: 8% 60% 16% 16%;
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 15px auto 0 auto;
    box-sizing: border-box;
`;
export const SCheckbox = styled.input`
    transform: scale(3);
    grid-column: 1;
    width: 95%;
`;
export const STodoLabel = styled.label`
    margin: 0;
    padding: 0;
    grid-column: 2;
    font-size: 23px;
    color: #fff;
    width: 95%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
`;
export const STodoButton = styled.button`
    width: 90%;
    border-radius: 5px;
    height: 80%;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`;
export const STodoEditButton = styled(STodoButton)`
    grid-column: 3;
    background-color: #3b9926;
`;
export const STodoDeleteButton = styled(STodoButton)`
    background-color: #b32f1e;
    grid-column: 4;
`;

export const SEditInput = styled(SInput)`
    //width: 400px;
    width: 95%;
    margin: 0;
    padding: 0;
    height: 70%;
    grid-column: span 2;
`;
