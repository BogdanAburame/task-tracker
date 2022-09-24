import Task from '../Task/Task';
import styles from './Board.module.css'

const Board = ({title, tasks, ...props}) => {


  return ( 
    <div className={styles.board}>
      <div className={styles.title}>{title.toUpperCase()}</div>
      <div className={styles.content}>
        {tasks && tasks.map(task => {
          return <Task taskText={task.taskText} key={task.id}/>

        })}
      </div>
    </div>
  );
}

export default Board;