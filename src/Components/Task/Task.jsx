import styles from './Task.module.css'

const Task = (props) => {
  return ( 
    <div className={styles.name}>
      <div>{props.taskText}</div>
      
    </div>
   );
}
 
export default Task;