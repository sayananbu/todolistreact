import { FC, memo, useContext } from 'react';
import { SInputSearch, SSearchAndFilterForm, SSelect } from './styles/searchandfilter';
import { Filter } from '../TodoListScreen/TodoListScreen';
import { ThemeContext } from 'styled-components';

type SearchAndFilterPropsType = {
    setFilter: Function;
    setSearchQuery: Function;
};
const SearchAndFilter: FC<SearchAndFilterPropsType> = ({ setFilter, setSearchQuery }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <SSearchAndFilterForm>
            <SSelect
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(e.target.value);
                }}
            >
                <option value={Filter.All}>Все задачи</option>
                <option value={Filter.Done}>Выполнены</option>
                <option value={Filter.Active}>Активные</option>
            </SSelect>
            <SInputSearch
                theme={theme}
                type='text'
                placeholder='Поиск по названию...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
        </SSearchAndFilterForm>
    );
};

export default memo(SearchAndFilter);
