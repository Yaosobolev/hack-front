import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "./type";
import { fetchUser } from "./asyncAction";

const initialState: CurrentUser = {
  firstname: "",
  lastname: "",
  email: "",
  id: "",
  type: "",
  group_id: 0,
  created_at: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<CurrentUser>) {
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.group_id = action.payload.group_id;
      state.created_at = action.payload.created_at;
    },
  },
  extraReducers(builder) {},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
