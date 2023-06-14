import React, { ChangeEventHandler } from 'react'
import { Slider, ToggleTheme } from './styles/themetoggler.styles';

const ThemeToggler = ({checked, onChange}:{checked:boolean,onChange:ChangeEventHandler<HTMLInputElement>}) => {
	return (
        <ToggleTheme>
            <label>
                <input type='checkbox' checked={checked} onChange={onChange}/>
                <Slider />
            </label>
        </ToggleTheme>
    );
}

export default ThemeToggler