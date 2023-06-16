import React, { MutableRefObject, memo, useRef, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
    SCheckbox,
    SEditInput,
    STodoContainer,
    STodoDeleteButton,
    STodoEditButton,
    STodoLabel,
} from './styles/todo.styles';
type TodoType = {
    id: string;
    title: string;
    completed: boolean;
    deleteTodo: Function;
    editTodo: Function;
};

const Todo: React.FC<TodoType> = ({ id, title, completed, deleteTodo, editTodo}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
	const {theme} = useContext(ThemeContext)
    function handleEditTodo() {
        if (isEdit) {
            setIsEdit(false);
            if (inputRef.current.value.trim().length > 0 && inputRef.current.value.trim() !== title) {
                editTodo({ id: id, title: inputRef.current.value.trim(), completed: completed });
            }
        } else {
            setIsEdit(true);
            queueMicrotask(() => {
                inputRef.current.value = title;
            });
        }
    }
    function handleDeleteButton() {
        if (isEdit) {
            setIsEdit(false);
        } else deleteTodo(id);
    }
    return (
        <STodoContainer theme={theme}>
            {isEdit ? (
                <SEditInput theme={theme} ref={inputRef} type='text' placeholder='Название..' />
            ) : (
                <>
                    <SCheckbox
                        type='checkbox'
                        id={id}
                        checked={completed}
                        onChange={() => editTodo({ id, title: title, completed: !completed })}
                    />
                    <STodoLabel theme={theme} htmlFor={id}>{title}</STodoLabel>
                </>
            )}
            <STodoEditButton onClick={handleEditTodo}>{isEdit ? 'Сохранить' : 'Изменить'}</STodoEditButton>
            <STodoDeleteButton onClick={handleDeleteButton}>{isEdit ? 'Отменить' : 'Удалить'}</STodoDeleteButton>
        </STodoContainer>
    );
};

export default memo(Todo);
