import {createSlice} from "@reduxjs/toolkit";
import {AddCardAction, Card, DeleteCardAction} from "./types";

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
			if (action.payload.newTitle === '') return
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
		},
		deleteCard: (state: Array<Card>, action: DeleteCardAction) => {
			return state.filter(card => card.id !== action.payload)
		}
	}
})

export const {addCard, deleteCard} = cardSlice.actions

export const selectColumnCards = (state, colId) => {
	return state.cards.filter(card => card.colId === colId)
}
// TODO: delete this selector, just use card.title
export const selectCardTitle = (state, id) => {
	return state.cards.find(card => card.id === id).title
}

export default cardSlice.reducer
