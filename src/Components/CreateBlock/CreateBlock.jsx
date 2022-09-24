import styles from './CreateBlock.module.css'

const CreateBlock = props => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Create new task</div>
      <div className={styles.content}>
        <div className={styles.input}><input type="text" /></div>
        <div className={styles.button}><button>Create</button></div>
      </div>
    </div>
  )
}

export default CreateBlock