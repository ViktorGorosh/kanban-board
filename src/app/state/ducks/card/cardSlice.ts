import {createSlice} from "@reduxjs/toolkit";
import {AddCardAction, Card} from "./types";

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

export const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addCard: (state: Array<Card>, action: AddCardAction) => {
			return [
				...state,
				{
					colId: action.payload.colId,
					id: action.payload.id,
					title: action.payload.newTitle,
					description: null,
					author: action.payload.author,
				}
			]
		}
	}
})

export const {addCard} = cardSlice.actions

export const selectColumnCards = (state, colId) => {
	return state.cards.filter(card => card.colId === colId)
}
export const selectCardTitle = (state, id) => {
	return state.cards.find(card => card.id === id).title
}

export default cardSlice.reducer
