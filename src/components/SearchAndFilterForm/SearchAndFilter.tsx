import { FC, memo } from 'react';
import { Filter } from '../../app';
import { SInputSearch, SSearchAndFilterForm, SSelect } from './styles/searchandfilter';

type SearchAndFilterPropsType = {
    filterList: Function;
    searchList: Function;
};
const SearchAndFilter: FC<SearchAndFilterPropsType> = memo(({ filterList, searchList }) => {
	
    return (
        <SSearchAndFilterForm>
            <SSelect
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
					filterList(e.target.value);
				}}
            >
                <option value={Filter.All}>Все задачи</option>
                <option value={Filter.Done}>Выполнены</option>
                <option value={Filter.Active}>Активные</option>
            </SSelect>
            <SInputSearch
                type='text'
                placeholder='Поиск по названию...'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchList(e.target.value)}
            />
        </SSearchAndFilterForm>
    );
});

export default SearchAndFilter;
