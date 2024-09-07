import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload); // the data comes in action.payload and push it on state
      // console.log("from redux state : ", state);
      // console.log("from redux action: ", action);
      // console.log("from redux ac p: ", action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload,1);
      console.log("from redux ac p: ", action.payload);
    },
    deleteUsers(state, action) {},
  },
});

console.log(userSlice.actions);
export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
