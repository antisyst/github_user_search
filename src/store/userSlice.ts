import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserData from '../types/UserData';
interface UserState {
  userData: UserData | null;
  loading: boolean;
}

const initialState: UserState = {
  userData: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserDataStart(state) {
      state.loading = true;
    },
    fetchUserDataSuccess(state, action: PayloadAction<UserData>) {
      state.userData = action.payload;
      state.loading = false;
    },
    fetchUserDataFailure(state) {
      state.userData = null;
      state.loading = false;
    },
  },
});

export const { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } = userSlice.actions;

export default userSlice.reducer;
