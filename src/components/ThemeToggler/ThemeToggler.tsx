import React, { ChangeEventHandler, FC } from 'react';
import { Slider, ToggleTheme } from './styles/themetoggler.styles';
type ThemeTogglerPropsType = {
    checked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>,
    theme: string
};
const ThemeToggler:FC<ThemeTogglerPropsType> = ({ checked, onChange, theme }) => {
    return (
        <ToggleTheme theme={theme}>
            <label>
                <input type='checkbox' checked={checked} onChange={onChange} />
                <Slider />
            </label>
        </ToggleTheme>
    );
};

export default ThemeToggler;
