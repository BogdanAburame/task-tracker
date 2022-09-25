import styles from './Task.module.css'
import {useDispatch} from 'react-redux'
import { changeStatusTaskToNext } from '../../redux/store';

const Task = (props) => {
  const dispatch = useDispatch()
  const test = () => {
    dispatch(changeStatusTaskToNext({id: props.id, status: props.title}))
  }
  return ( 
    <div className={styles.name}>
      <div>{props.taskText}</div>
      <button onClick={test} disabled={props.title==='finish'}>next</button>
    </div>
   );
}
 
export default Task;