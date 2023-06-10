import { SApp } from './styles/app.styles';
import { FC } from 'react';
import TodoListScreen from './components/TodoListScreen/TodoListScreen';


const App: FC = () => {
    return (
        <SApp>
            <TodoListScreen/>
        </SApp>
    );
};

export default App;
