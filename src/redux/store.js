import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    startTasks: [
      { id: 0, taskText: 'Start task', status: 'start' }
    ],
    inProgressTasks: [
      { id: 1, taskText: 'In progress task', status: 'in progress' }
    ],
    finishTasks: [
      { id: 2, taskText: 'Finish task', status: 'finish' }
    ],
    newTaskText: ''
  },
  reducers: {
    createTask: (state, action) => {
      state.startTasks.push(action.payload)
    },
    changeNewTaskText: (state, action) => {
      state.newTaskText = action.payload
    },
    changeStatusTaskToNext: (state, action) => {
      switch (action.payload.status) {
        case 'start':
          changeStatusTask(state.startTasks, state.inProgressTasks, action)
          break;
        case 'in progress':
          changeStatusTask(state.inProgressTasks, state.finishTasks, action)
          break
        default:
          break;
      }
    },
    deleteTask: (state, action) => {
      switch (action.payload.status) {
        case 'start':
          state.startTasks.splice(state.startTasks.findIndex(t => t.id === action.payload.id), 1)
          break;
        case 'in progress':
          state.inProgressTasks.splice(state.inProgressTasks.findIndex(t => t.id === action.payload.id), 1)
          break;
        case 'finish':
          state.finishTasks.splice(state.finishTasks.findIndex(t => t.id === action.payload.id), 1)
          break;
        default:
          break;
      }
    },
    editTextTask: (state, action) => {
      switch (action.payload.status) {
        case 'start':
          state.startTasks.map(t => {
            if (t.id === action.payload.id) {
              t.taskText = action.payload.newTaskText
            } 
          })
          break;
        case 'in progress':
          state.inProgressTasks.map(t => {
            if (t.id === action.payload.id) {
              t.taskText = action.payload.newTaskText
            } 
          })
          break;
        case 'finish':
          state.finishTasks.map(t => {
            if (t.id === action.payload.id) {
              t.taskText = action.payload.newTaskText
            } 
          })
          break;
        default:
          break;
      }
    }
  }
})


// Функция помощник, помогает избежать дублирования кода

const changeStatusTask = (prevState, nextState, action) => {
  prevState.map(t => {
    if (t.id === action.payload.id) {
      nextState.push(t)
    }
  })
  prevState.splice(prevState.findIndex(t => t.id === action.payload.id), 1)
}

export const { createTask, changeNewTaskText, changeStatusTaskToNext, deleteTask, editTextTask } = taskSlice.actions

export const store = configureStore({
  reducer: taskSlice.reducer
})

// export default taskSlice.reducer