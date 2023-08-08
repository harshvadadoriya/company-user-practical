import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const companySlice = createSlice({
	name: 'company',
	initialState,
	reducers: {
		addCompanyFormData: (state, action) => {
			state.push(action.payload);
		},
		resetCompanyFormData: () => initialState,
	},
});

export const { addCompanyFormData, resetCompanyFormData } =
	companySlice.actions;
export const getCompanyData = (state) => state.company;
export default companySlice.reducer;
