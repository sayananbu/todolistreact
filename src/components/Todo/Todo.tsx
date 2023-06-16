import React, { MutableRefObject, memo, useRef, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
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
	const {t} = useTranslation()
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
                <SEditInput theme={theme} ref={inputRef} type='text' placeholder={`${t('todo.changeNameInput')}`} />
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
            <STodoEditButton onClick={handleEditTodo}>{isEdit ? t('todo.buttons.save') : t('todo.buttons.change')}</STodoEditButton>
            <STodoDeleteButton onClick={handleDeleteButton}>{isEdit ? t('todo.buttons.cancel') : t('todo.buttons.delete')}</STodoDeleteButton>
        </STodoContainer>
    );
};

export default memo(Todo);
