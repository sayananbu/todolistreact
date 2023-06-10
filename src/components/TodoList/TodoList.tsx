import { FC, memo } from 'react';
import Todo from '../Todo/Todo';
import { STodoList } from './styles/todolist.styles.';
import { TodoType } from '../TodoListScreen/TodoListScreen';

type TodoListPropsType = {
    deleteTodo: Function;
    todoList: TodoType[];
    editTodo: Function;
};
const TodoList: FC<TodoListPropsType> = ({ deleteTodo, todoList, editTodo }) => {
    return (
        <STodoList>
            {todoList.map(val => {
                return <Todo key={val.id} {...val} deleteTodo={deleteTodo} editTodo={editTodo} />;
            })}
        </STodoList>
    );
};

export default memo(TodoList);
