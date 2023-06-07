import React, { FC, memo, useCallback } from 'react';
import { Filter, TodoType } from '../../app';
import Todo from '../Todo/Todo';
import { STodoList } from './styles/todolist.styles.';

type TodoListPropsType = {
	deleteTodo:Function,
	todoList:TodoType[],
	filter:Filter,
	searchQuery:string,
	editTodo:Function
}
const TodoList:FC<TodoListPropsType> = memo(({deleteTodo, todoList, filter, searchQuery, editTodo}) => {
	function getFilteredList(filter:Filter):TodoType[]{
		return filter == Filter.All ? todoList : todoList.filter(val=>(filter as unknown) == val.completed)
	}
	function getSearchedList(list:TodoType[],query:string):TodoType[]{
		return list.filter(val=>val.title.startsWith(query))
	}
	let list = getSearchedList(getFilteredList(filter),searchQuery)

    return (
		<STodoList>
			{
				list.map(val=>{
					return <Todo key={val.id} {...val} deleteTodo={deleteTodo} editTodo={editTodo}/>
				})
			}
		</STodoList>
	)
});

export default TodoList;
