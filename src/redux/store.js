import { configureStore, createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [
      {id: 0, taskText: 'Start task', status: 'start'},
      {id: 1, taskText: 'In progress task', status: 'in progress'},
      {id: 2, taskText: 'Finish task', status: 'finish'},
    ],
    newTaskText: ''
  },
  reducers: {
    createTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    changeNewTaskText: (state, action) => {
      state.newTaskText = action.payload
    }
  }
})

export const {createTask, changeNewTaskText} = taskSlice.actions

export const store = configureStore({
  reducer: taskSlice.reducer
})

// export default taskSlice.reducer