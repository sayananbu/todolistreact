import React from 'react';
import { SHeader, SSelect, SInputAdd, SButton, SInputSearch, STitle } from './styles/header.styles';

const Header = () => {
    return (
        <SHeader>
            <SSelect>
                <option value='all'>Все задачи</option>
                <option value='completed'>Выполнены</option>
                <option value='active'>Активные</option>
            </SSelect>
            <SInputAdd type='text' placeholder='Новая задача...' />
            <SButton>Добавить</SButton>
            <SInputSearch type='text' placeholder='Поиск по названию...' />
			<STitle>Осталось задач: 2</STitle>
        </SHeader>
    );
};

export default Header;
