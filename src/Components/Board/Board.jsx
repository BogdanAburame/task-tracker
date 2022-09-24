import Task from '../Task/Task';
import styles from './Board.module.css'

const Board = ({title, ...props}) => {
  return ( 
    <div className={styles.board}>
      <div className={styles.title}>{title.toUpperCase()}</div>
      <div className={styles.content}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
          
      </div>
    </div>
  );
}

export default Board;