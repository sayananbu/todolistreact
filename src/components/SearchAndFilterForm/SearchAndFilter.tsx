import { FC, memo, useContext } from 'react';
import { SInputSearch, SSearchAndFilterForm, SSelect } from './styles/searchandfilter';
import { Filter } from '../TodoListScreen/TodoListScreen';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

type SearchAndFilterPropsType = {
    setFilter: Function;
    setSearchQuery: Function;
};
const SearchAndFilter: FC<SearchAndFilterPropsType> = ({ setFilter, setSearchQuery }) => {
    const { theme } = useContext(ThemeContext);
	const {t} = useTranslation()
    return (
        <SSearchAndFilterForm>
            <SSelect
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFilter(e.target.value);
                }}
            >
                <option value={Filter.All}>{t('header.filters.all')}</option>
                <option value={Filter.Done}>{t('header.filters.done')}</option>
                <option value={Filter.Active}>{t('header.filters.active')}</option>
            </SSelect>
            <SInputSearch
                theme={theme}
                type='text'
                placeholder={`${t('header.searchInput')}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
        </SSearchAndFilterForm>
    );
};

export default memo(SearchAndFilter);
