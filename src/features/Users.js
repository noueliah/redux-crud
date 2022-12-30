import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      // acá va el code to add a user
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

// the actions are all the functions that can be used to alter the state

export default userSlice.reducer; // TODO: este export está mal
