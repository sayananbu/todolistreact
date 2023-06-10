import { memo } from 'react';
import AddTodoFrom from '../AddTodoForm/AddTodoFrom';
import SearchAndFilter from '../SearchAndFilterForm/SearchAndFilter';
import TasksCounter from '../TasksCounter/TasksCounter';
import { SHeader } from './styles/header.styles';

type HeaderPropsType = {
    addNewTodo: Function;
    setFilter: Function;
    todosCount: number;
    setSearchQuery: Function;
};
const Header: React.FC<HeaderPropsType> = ({ addNewTodo, setFilter, todosCount, setSearchQuery }) => {
    return (
        <SHeader>
            <SearchAndFilter setFilter={setFilter} setSearchQuery={setSearchQuery} />
            <AddTodoFrom addNewTodo={addNewTodo} />
            <TasksCounter count={todosCount} />
        </SHeader>
    );
};

export default memo(Header);
