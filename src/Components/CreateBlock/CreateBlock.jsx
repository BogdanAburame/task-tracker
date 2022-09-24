import styles from './CreateBlock.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeNewTaskText, createTask } from '../../redux/store'

const CreateBlock = props => {
  const dispatch = useDispatch()
  const taskText = useSelector(state => state.newTaskText)

  const typeNewTask = (e) => {
    dispatch(changeNewTaskText(e.target.value))
  }

  const createNewTask = () => {
    dispatch(createTask({id: Date.now(), taskText: taskText, status: 'start'}))
    dispatch(changeNewTaskText(''))
    
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Create new task</div>
      <div className={styles.content}>
        <div className={styles.input}><input type="text" value={taskText} onChange={typeNewTask}/></div>
        <div className={styles.button}><button onClick={createNewTask}>Create</button></div>
      </div>
    </div>
  )
}

export default CreateBlock