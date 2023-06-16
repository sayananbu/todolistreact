import React from 'react'
import { useTranslation } from 'react-i18next';
import { SCounter } from './styles/taskscounter.styles'

type TaskCounterType = {
	count:number;
	theme:string;
}
const TasksCounter:React.FC<TaskCounterType> = ({count,theme}) => {
	const {t} = useTranslation()
  return (<SCounter theme={theme}>{
	
	count<1 ? t('header.tasksCounter.empty') :
	`${t('header.tasksCounter.left')} ${count}`
		}
	</SCounter>
  )
}

export default TasksCounter