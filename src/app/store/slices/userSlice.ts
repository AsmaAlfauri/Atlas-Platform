
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: string | null;
  name: string;
  role: string;
}

const initialState: UserState = {
  userId: null,
  name: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ userId: string; name: string; role: string }>) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    resetUser: (state) => {
      state.userId = null;
      state.name = '';
      state.role = '';
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
