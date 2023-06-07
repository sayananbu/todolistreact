import React, { MutableRefObject, useRef, useState } from 'react'
import { SInput } from '../Header/styles/header.styles'
import { SCheckbox, SEditInput, STodoContainer, STodoDeleteButton, STodoEditButton, STodoLabel } from './styles/todo.styles'
type TodoType = {
	id:string,
	title:string,
	completed:boolean,
	deleteTodo:Function,
	editTodo:Function
}
const Todo:React.FC<TodoType> = ({id,title,completed, deleteTodo, editTodo}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>
	function handleEditTodo(){
		if(isEdit){
			setIsEdit(false)
		}
		else {
			setIsEdit(true)
			inputRef.current.value = title
		}

	}
	function handleDeleteButton(){
		if(isEdit){
			setIsEdit(false)
		}
		else deleteTodo(id)
	}
  return (
	<STodoContainer>
		<SCheckbox type='checkbox' id={id} checked={completed} onChange={()=>editTodo({id,title:title,completed:!completed})}/>
		{
			isEdit ? 
			<SEditInput ref={inputRef} type='text'/> : 
			<STodoLabel htmlFor={id}>{title}</STodoLabel>
		}
		<STodoEditButton onClick={handleEditTodo}>{isEdit ? 'Сохранить' :'Изменить'}</STodoEditButton>
		<STodoDeleteButton onClick={handleDeleteButton}>{isEdit ? 'Отменить' : 'Удалить'}</STodoDeleteButton>
	</STodoContainer>
  )
}

export default Todo