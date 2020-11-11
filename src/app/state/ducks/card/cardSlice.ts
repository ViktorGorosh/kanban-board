import {createSlice} from "@reduxjs/toolkit";
import {AddCardAction, Card, DeleteCardAction, UpdateCardAction} from "./types";

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
		},
		deleteCard: (state: Array<Card>, action: DeleteCardAction) => {
			return state.filter(card => card.id !== action.payload)
		},
		updateCard: (state: Array<Card>, action: UpdateCardAction) => {
			return state.map(card => {
				if (card.id === action.payload.id) {
					return {
						...card,
						...action.payload
					}
				}
				return card
			})
		}
	}
})

export const {addCard, deleteCard, updateCard} = cardSlice.actions

export const selectColumnCards = (state, colId) => {
	return state.cards.filter(card => card.colId === colId)
}

// export const selectCardTitle = (state, id) => {
// 	return state.cards.find(card => card.id === id).title
// }

export default cardSlice.reducer
