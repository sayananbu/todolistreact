import { FC, memo, useCallback, useMemo, useState } from 'react';
import { STodoListContainer } from './styles/todolistscreen.styles';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import { initTodos } from '../../data/data.model';

export type TodoType = {
    id: string;
    title: string;
    completed: boolean;
};
export enum Filter {
    Active,
    Done,
    All,
}
const TodoListScreen: FC = () => {
    const [todos, setTodos] = useState<TodoType[]>(initTodos);
    const [filter, setFilter] = useState<Filter>(Filter.All);
    const [searchQuery, setSearchQuery] = useState<string>('');
	
    const addNewTodo = useCallback(
        (newTodo: TodoType) => {
            setTodos(list => [newTodo, ...list]);
        },
        [todos]
    );

    const deleteTodo = useCallback((id: string) => {
        setTodos(list => list.filter(val => val.id !== id));
    }, []);

    const editTodo = useCallback((todo: TodoType) => {
        setTodos(val =>
            val.map(val => {
                if (val.id === todo.id) {
                    return todo;
                }
                return val;
            })
        );
    }, []);

    const getFilteredList = useCallback(
        (filter: Filter): TodoType[] => {
            return filter == Filter.All ? todos : todos.filter(val => (filter as unknown) == val.completed);
        },
        [todos]
    );

    const getSearchedList = useCallback((list: TodoType[], query: string): TodoType[] => {
		console.log('slist')
        return list.filter(val => val.title.startsWith(query));
    }, []);
    //let list = getSearchedList(getFilteredList(filter), searchQuery);
	const list = useMemo(()=>getSearchedList(getFilteredList(filter), searchQuery),[todos,filter,searchQuery])

    return (
        <STodoListContainer>
            <Header
                addNewTodo={addNewTodo}
                todosCount={list.length}
                setFilter={setFilter}
                setSearchQuery={setSearchQuery}
            />
            <TodoList deleteTodo={deleteTodo} todoList={list} editTodo={editTodo} />
        </STodoListContainer>
    );
};

export default memo(TodoListScreen);
