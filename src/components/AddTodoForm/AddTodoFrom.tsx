import { FC, MutableRefObject, memo, useCallback, useRef, useContext } from 'react';
import { SAddTodoForm, SButton, SInputAdd } from './styles/addtodoform.styles';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
type AddTodoFromPropsType = {
    addNewTodo: Function;
};
const AddTodoFrom: FC<AddTodoFromPropsType> = ({ addNewTodo }) => {
    const todoTitleInput = useRef() as MutableRefObject<HTMLInputElement>;
	const {theme} = useContext(ThemeContext)
    const submitForm: React.FormEventHandler<HTMLFormElement> = useCallback(e => {
        e.preventDefault();
        if (todoTitleInput.current.value.trim().length > 0) {
            addNewTodo({ id: uuidv4(), title: todoTitleInput.current.value.trim(), completed: false });
        }
        todoTitleInput.current.value = '';
    },[])
	const {t} = useTranslation()
    return (
        <SAddTodoForm onSubmit={submitForm}>
            <SInputAdd theme={theme} ref={todoTitleInput} type='text' placeholder={`${t('header.addInput')}`} />
            <SButton theme={theme} type='submit'>{t('header.addButton')}</SButton>
        </SAddTodoForm>
    );
};

export default memo(AddTodoFrom);
