import React from 'react';
import styles from './Task.module.css'
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { changeStatusTaskToNext, deleteTask, editTextTask } from '../../redux/store';
import TaskInput from './TaskInput';

const Task = (props) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const onClickChangeStatus = () => {
    dispatch(changeStatusTaskToNext({ id: props.id, status: props.title }))
  }
  const onClickDeleteTask = () => {
    dispatch(deleteTask({ id: props.id, status: props.title }))
  }
  const onClickChangeEditMode = () => {
    setEditMode(true)
  }

  const ref = React.createRef()

  return (
    <div>
      {editMode 
      ? <TaskInput 
        changeEditMode={setEditMode} 
        editTextTask={editTextTask}
        dispatch={dispatch}
        id={props.id}
        status={props.title}
        taskText={props.taskText}
        ref={ref}
        /> 
      : <div className={styles.name}>
          <div className={styles.taskTextBlock}>{props.taskText}</div>
          <div className={styles.actionButtons}>
            <button onClick={onClickDeleteTask}>delete</button>
            <button onClick={onClickChangeEditMode}>edit</button>
            <button onClick={onClickChangeStatus} disabled={props.title === 'finish'}>next</button>
          </div>
        </div>
      }
    </div>
  );
}



export default Task;