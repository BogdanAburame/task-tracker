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
      if (action.payload.status === 'start') {
        state.startTasks.map(t => {
          if (t.id === action.payload.id) {
            state.inProgressTasks.push(t)
          }
        })
        state.startTasks.splice(state.startTasks.findIndex(t => t.id === action.payload.id), 1)
      }
      if (action.payload.status === 'in progress') {
        state.inProgressTasks.map(t => {
          if (t.id === action.payload.id) {
            state.finishTasks.push(t)
          }
        })
        state.inProgressTasks.splice(state.inProgressTasks.findIndex(t => t.id === action.payload.id), 1)
      }
    }
  }
})

export const { createTask, changeNewTaskText, changeStatusTaskToNext } = taskSlice.actions

export const store = configureStore({
  reducer: taskSlice.reducer
})

// export default taskSlice.reducer