import { SApp } from './styles/app.styles';
import { FC, useState } from 'react';
import TodoListScreen from './components/TodoListScreen/TodoListScreen';
import { ThemeContext } from 'styled-components';

const App: FC = () => {
	const [theme, setTheme] = useState<string>('dark')
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <SApp theme={theme}>
                <TodoListScreen />
            </SApp>
        </ThemeContext.Provider>
    );
};

export default App;
