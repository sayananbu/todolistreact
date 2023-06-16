import React from 'react'
import { SCounter } from './styles/taskscounter.styles'

type TaskCounterType = {
	count:number;
	theme:string;
}
const TasksCounter:React.FC<TaskCounterType> = ({count,theme}) => {
  return (<SCounter theme={theme}>{
	
	count<1 ? 'Здесь пока нет задач :(' :
	`Осталось задач: ${count}`
		}
	</SCounter>
  )
}

export default TasksCounter