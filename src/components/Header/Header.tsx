import { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import AddTodoFrom from '../AddTodoForm/AddTodoFrom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchAndFilter from '../SearchAndFilterForm/SearchAndFilter';
import TasksCounter from '../TasksCounter/TasksCounter';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { SHeader } from './styles/header.styles';

type HeaderPropsType = {
    addNewTodo: Function;
    setFilter: Function;
    todosCount: number;
    setSearchQuery: Function;
};
const Header: React.FC<HeaderPropsType> = ({ addNewTodo, setFilter, todosCount, setSearchQuery }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <SHeader>
            <SearchAndFilter setFilter={setFilter} setSearchQuery={setSearchQuery} />
            <AddTodoFrom addNewTodo={addNewTodo} />
            <TasksCounter count={todosCount} theme={themeContext.theme} />
            <ThemeToggler
				theme={themeContext.theme}
                checked={themeContext.theme === 'dark' ? false : true}
                onChange={() => themeContext.setTheme((val: string) => (val === 'dark' ? 'light' : 'dark'))}
            />
			<LanguageSelector />
        </SHeader>
    );
};

export default memo(Header);
