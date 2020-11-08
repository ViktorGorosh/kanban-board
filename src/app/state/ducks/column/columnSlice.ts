import {createSlice} from "@reduxjs/toolkit";
import {changeTitleAction, Column} from "./types";

const initialState: Array<Column> = [
	{id: 0, title: 'TO DO'},
	{id: 1, title: 'In progress'},
	{id: 2, title: 'Testing'},
	{id: 3, title: 'Done'},
]

export const columnSlice = createSlice({
	name: 'column',
	initialState,
	reducers: {
		changeTitle: (state: Array<Column>, action: changeTitleAction) => {
			if (action.payload.newTitle !== '') {
				return state.map((column) => {
					if (column.id === action.payload.id) {
						return {...column, title: action.payload.newTitle}
					}
					return column
				})
			}
		}
	}
})

export const {changeTitle} = columnSlice.actions

export const selectColumns = state => state.columns
export const selectColTitle = (state, id) => {
	return state.columns.find(column => column.id === id).title
}

export default columnSlice.reducer
