import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { SApp, SContainer } from './styles/app.styles';
import {initTodos} from './data/data.model'
import { FC, useState } from 'react';
export type TodoType = {
	id:string,
	title:string,
	completed:boolean
}
export enum Filter{
	Active,
	Done,
	All
}
const App:FC = () => {
	const [todos, setTodos] = useState<TodoType[]>(initTodos)
	const [filter,setFilter] = useState<Filter>(Filter.All)
	const [searchQuery, setSearchQuery] = useState('')

	function filterList(filter:Filter){
		setFilter(filter)
	}
	function addTodo(newTodo:TodoType){
		setTodos(list=>[newTodo,...list])
	}
	function deleteTodo(id:string){
		setTodos(list=>list.filter(val=>val.id!==id))
	}
	function searchList(query:string){
		setSearchQuery(query)
	}
	function editTodo(todo:TodoType){
		setTodos(val=>val.map(val=>{
			if(val.id===todo.id){
				return todo
			}
			return val
		}))
	}
    return (
        <SApp>
            <SContainer>
                <Header addTodo={addTodo} todoList={todos} filterList={filterList} searchList={searchList}/>
				<TodoList deleteTodo={deleteTodo} todoList={todos} filter={filter} searchQuery={searchQuery} editTodo={editTodo}/>
            </SContainer>
        </SApp>
    );
}

export default App;
