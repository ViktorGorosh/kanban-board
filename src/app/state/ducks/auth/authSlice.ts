import {createSlice} from "@reduxjs/toolkit";
import {AuthState, LoginAction} from "./types";

const initialState: AuthState = {
	name: 'Aноним',
	isAuthorized: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state: AuthState, action: LoginAction) => {
			state.name = action.payload
			state.isAuthorized = true
		}
	}
})

export const { login } = authSlice.actions

export const selectUser = state => state.user.name
export const selectIsAuthorized = state => state.user.isAuthorized

export default authSlice.reducer
