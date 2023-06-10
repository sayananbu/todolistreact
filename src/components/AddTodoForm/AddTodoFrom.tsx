import { FC, MutableRefObject, memo, useCallback, useRef } from 'react';
import { SAddTodoForm, SButton, SInputAdd } from './styles/addtodoform.styles';
import { v4 as uuidv4 } from 'uuid';
type AddTodoFromPropsType = {
    addNewTodo: Function;
};
const AddTodoFrom: FC<AddTodoFromPropsType> = ({ addNewTodo }) => {
    const todoTitleInput = useRef() as MutableRefObject<HTMLInputElement>;

    const submitForm: React.FormEventHandler<HTMLFormElement> = useCallback(e => {
        e.preventDefault();
        if (todoTitleInput.current.value.trim().length > 0) {
            addNewTodo({ id: uuidv4(), title: todoTitleInput.current.value.trim(), completed: false });
        }
        todoTitleInput.current.value = '';
    },[])
    return (
        <SAddTodoForm onSubmit={submitForm}>
            <SInputAdd ref={todoTitleInput} type='text' placeholder='Новая задача...' />
            <SButton type='submit'>Добавить</SButton>
        </SAddTodoForm>
    );
};

export default memo(AddTodoFrom);
