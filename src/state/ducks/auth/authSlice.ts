import {createSlice} from "@reduxjs/toolkit";
import {AuthState, LoginAction} from "./types";

const initialState: AuthState = {
	name: 'Aноним',
	isAuthorized: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: LoginAction) => {
			state.name = action.payload
			state.isAuthorized = true
		}
	}
})

export const { login } = authSlice.actions

export const selectUser = state => state.user

export default authSlice.reducer
