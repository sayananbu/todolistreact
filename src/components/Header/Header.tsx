import { memo } from 'react';
import { TodoType } from '../../app';
import AddTodoFrom from '../AddTodoForm/AddTodoFrom';
import SearchAndFilter from '../SearchAndFilterForm/SearchAndFilter';
import TasksCounter from '../TasksCounter/TasksCounter';
import { SHeader } from './styles/header.styles';

type HeaderPropsType = {
    addTodo: Function;
    filterList: Function;
    todoList: TodoType[];
    searchList: Function;
};
const Header: React.FC<HeaderPropsType> = memo(({ addTodo, filterList, todoList, searchList }) => {
    return (
        <SHeader>
            <SearchAndFilter filterList={filterList} searchList={searchList} />
            <AddTodoFrom addTodo={addTodo} />
            <TasksCounter count={todoList.length} />
        </SHeader>
    );
});

export default Header;
