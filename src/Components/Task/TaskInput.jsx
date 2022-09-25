import React, { useState } from 'react';
import styles from './Task.module.css'

const TaskInput = React.forwardRef(({changeEditMode, editTextTask, dispatch, id, status, taskText}, ref) => {
  const [input, setInputValue] = useState(taskText)
  const saveChangedTaskText = () => {
    dispatch(editTextTask({id: id, status: status, newTaskText: input}))
    changeEditMode()
  }
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className={styles.taskInputBlock}>
      <input autoFocus ref={ref} value={input} onChange={onChangeInputValue}/>
      <button onClick={saveChangedTaskText}>save</button>
    </div>
  )
})

export default TaskInput