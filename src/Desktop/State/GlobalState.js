import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskState: [],
  onGoingState: [],
  onGoState: [],
  completed: [],
};

const GlobalState = createSlice({
  name: "Project Management",
  initialState,
  reducers: {
    addScheduledTask: (state, { payload }) => {
      state.taskState = payload;
    },

    removingItem: (state, { payload }) => {
      state.taskState = state.taskState.filter((el) => el.id !== payload.id);
    },

    addingGoing: (state, { payload }) => {
      state.onGoState = payload;
    },
  },
});

export const {
  addScheduledTask,
  removingItem,
  addingGoing,
} = GlobalState.actions;
export default GlobalState.reducer;
