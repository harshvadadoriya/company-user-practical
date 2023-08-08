import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserFormData: (state, action) => {
			state.push(action.payload);
		},
		resetUserFormData: () => initialState,
	},
});

export const { addUserFormData, resetUserFormData } = userSlice.actions;
export const getUserData = (state) => state.user;
export default userSlice.reducer;
