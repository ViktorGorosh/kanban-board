import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		name: 'Aноним',
		isAuthorized: false,
	},
	reducers: {
		login: (state, action) => {
			if (action.payload !== '') {
				state.name = action.payload
				state.isAuthorized = true
			}
		}
	}
})

export const { login } = authSlice.actions

export const selectUser = state => state.user.name

export default authSlice.reducer
