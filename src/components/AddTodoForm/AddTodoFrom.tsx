import { FC, MutableRefObject, useRef } from 'react';
import { SAddTodoForm, SButton, SInputAdd } from './styles/addtodoform.styles';
import { v4 as uuidv4 } from 'uuid';
type AddTodoFromPropsType = {
	addTodo:Function
}
const AddTodoFrom:FC<AddTodoFromPropsType> = ({addTodo}) => {
	const todoTitleInput = useRef() as MutableRefObject<HTMLInputElement>;

	const submitForm:React.FormEventHandler<HTMLFormElement> = (e)=>{
		e.preventDefault()
		if(todoTitleInput.current.value.trim().length>0){
			addTodo({id:uuidv4(),title:todoTitleInput.current.value.trim(),completed:false})
		}
		todoTitleInput.current.value=''
	}
    return (
        <SAddTodoForm onSubmit={submitForm}>
            <SInputAdd ref={todoTitleInput} type='text' placeholder='Новая задача...' />
            <SButton type='submit'>Добавить</SButton>
        </SAddTodoForm>
    );
};

export default AddTodoFrom;
