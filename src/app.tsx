import Header from './components/Header/Header';
import { STodoList } from './components/TodoList/styles/todolist.styles.';
import TodoList from './components/TodoList/TodoList';
import { SApp, SContainer } from './styles/app.styles';

function App() {
    return (
        <SApp>
            <SContainer>
                <Header />
				<TodoList />
            </SContainer>
        </SApp>
    );
}

export default App;
