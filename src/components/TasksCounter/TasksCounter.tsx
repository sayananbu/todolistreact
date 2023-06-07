import React from 'react'
import { SCounter } from './styles/taskscounter.styles'

type TaskCounterType = {
	count:number
}
const TasksCounter:React.FC<TaskCounterType> = ({count}) => {
  return (
	count<1 ? <SCounter>Здесь пока нет задач :(</SCounter> :
	<SCounter>Осталось задач: {count}</SCounter>
  )
}

export default TasksCounter