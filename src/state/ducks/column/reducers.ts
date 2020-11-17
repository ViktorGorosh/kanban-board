import {createSlice} from "@reduxjs/toolkit";
import {Column} from "interfaces/column";
import {ChangeTitleAction} from "./types";

const initialState: Array<Column> = [
	{id: 0, title: 'TO DO'},
	{id: 1, title: 'In progress'},
	{id: 2, title: 'Testing'},
	{id: 3, title: 'Done'},
]

export const column = createSlice({
	name: 'column',
	initialState,
	reducers: {
		changeTitle: (state, action: ChangeTitleAction) => {
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

export default column.reducer
