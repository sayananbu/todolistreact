import { FC, memo, useRef } from 'react';
import Todo from '../Todo/Todo';
import { STodoList } from './styles/todolist.styles.';
import { TodoType } from '../TodoListScreen/TodoListScreen';
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';

type TodoListPropsType = {
    deleteTodo: Function;
    todoList: TodoType[];
    editTodo: Function;
};
const TodoList: FC<TodoListPropsType> = ({ deleteTodo, todoList, editTodo }) => {
	const cache = useRef(new CellMeasurerCache({
		fixedWidth: true,
		defaultHeight: 100,
	  }))
    const renderRow = (prop:any) => {
        return (
		<CellMeasurer key={prop.key} cache={cache.current} parent={prop.parent} columnIndex={0} rowIndex={prop.index}>
			<Todo  {...todoList[prop.index]} deleteTodo={deleteTodo} editTodo={editTodo} style={prop.style}/>
		</CellMeasurer>)
    };
    return (
        <STodoList>
            <AutoSizer>
				{({width,height})=>(
					<List 
					width={width} 
					height={height} 
					rowHeight={50} 
					rowRenderer={renderRow} 
					rowCount={todoList.length} />
				)}
            </AutoSizer>

            {/* {todoList.map(val => {
                    return <Todo key={val.id} {...val} deleteTodo={deleteTodo} editTodo={editTodo} />;
                })} */}
        </STodoList>
    );
};

export default memo(TodoList);
