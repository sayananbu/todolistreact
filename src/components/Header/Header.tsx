import { memo } from 'react';
import AddTodoFrom from '../AddTodoForm/AddTodoFrom';
import SearchAndFilter from '../SearchAndFilterForm/SearchAndFilter';
import TasksCounter from '../TasksCounter/TasksCounter';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { SHeader } from './styles/header.styles';

type HeaderPropsType = {
    addNewTodo: Function;
    setFilter: Function;
    todosCount: number;
    setSearchQuery: Function;
    setIsThemeOn: Function;
    isThemeOn: boolean;
};
const Header: React.FC<HeaderPropsType> = ({ addNewTodo, setFilter, todosCount, setSearchQuery, setIsThemeOn, isThemeOn }) => {
    return (
        <SHeader>
            <SearchAndFilter setFilter={setFilter} setSearchQuery={setSearchQuery} />
            <AddTodoFrom addNewTodo={addNewTodo} />
            <TasksCounter count={todosCount} />
			<ThemeToggler checked={isThemeOn} onChange={()=>setIsThemeOn((val:boolean)=>!val)}/>
        </SHeader>
    );
};

export default memo(Header);
