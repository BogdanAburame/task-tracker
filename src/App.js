import styles from './App.module.css'
import CreateBlock from './Components/CreateBlock/CreateBlock'
import Board from './Components/Board/Board'
import {useSelector} from 'react-redux'

function App() {

  const startTasks = useSelector(state => state.startTasks)
  const inProgressTasks = useSelector(state => state.inProgressTasks)
  const finishTasks = useSelector(state => state.finishTasks)

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
