import styles from './Task.module.css'

const Task = (props) => {
  return ( 
    <div className={styles.name}>
      <p>Task name</p>
    </div>
   );
}
 
export default Task;