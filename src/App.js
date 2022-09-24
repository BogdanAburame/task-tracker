import styles from './App.module.css'
import CreateBlock from './Components/CreateBlock/CreateBlock'
import Board from './Components/Board/Board'
function App() {
  return (
    <div className={styles.container}>
      <CreateBlock />
      <div className={styles.boards}>
        <Board title='start' />
        <Board title='in progress'/>
        <Board title='finish'/>
      </div>
    </div>
  );
}

export default App;
