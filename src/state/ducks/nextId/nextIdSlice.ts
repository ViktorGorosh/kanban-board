import {createSlice} from "@reduxjs/toolkit";

const initialState: number = 4

export const nextIdSlice = createSlice({
	name: 'nextId',
	initialState,
	reducers: {
		incrementNextId: state => state + 1
	}
})

export const {incrementNextId} = nextIdSlice.actions

export const selectNextId = state => state.nextId

export default nextIdSlice.reducer
