import styles from './App.module.css'
import CreateBlock from './Components/CreateBlock/CreateBlock'
import Board from './Components/Board/Board'
import {useSelector} from 'react-redux'

function App() {

  const tasksFromState = useSelector(state => state.tasks) 
  const startTasks = tasksFromState.filter(task => task.status === "start")
  const inProgressTasks = tasksFromState.filter(task => task.status === "in progress")
  const finishTasks = tasksFromState.filter(task => task.status === "finish")

  return (
    <div className={styles.container}>
      <CreateBlock />
      <div className={styles.boards}>
        <Board title='start' tasks={startTasks}/>
        <Board title='in progress' tasks={inProgressTasks}/>
        <Board title='finish'tasks={finishTasks} />
      </div>
    </div>
  );
}

export default App;
