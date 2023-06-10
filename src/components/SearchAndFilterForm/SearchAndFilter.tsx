import { FC, memo } from 'react';
import { SInputSearch, SSearchAndFilterForm, SSelect } from './styles/searchandfilter';
import { Filter } from '../TodoListScreen/TodoListScreen';

type SearchAndFilterPropsType = {
    setFilter: Function;
    setSearchQuery: Function;
};
const SearchAndFilter: FC<SearchAndFilterPropsType> = ({ setFilter, setSearchQuery }) => {
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
                type='text'
                placeholder='Поиск по названию...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
        </SSearchAndFilterForm>
    );
};

export default memo(SearchAndFilter);
