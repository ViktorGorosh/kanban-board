import {createSlice} from "@reduxjs/toolkit";
import {Card} from "./types";

const initialState: Array<Card> = [
	{
		colId: 0,
		id: 0,
		title: 'Title 0',
		description: null,
		author: 'Author 0'
	},
	{
		colId: 1,
		id: 1,
		title: 'Title 1',
		description: null,
		author: 'Author 1'
	}
]

export const cardsSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {

	}
})

export const selectColumnCards = (state, colId) => {
	return state.cards.filter(card => card.colId === colId)
}
export const selectCardTitle = (state, id) => {
	return state.cards.find(card => card.id === id).title
}

export default cardsSlice.reducer
