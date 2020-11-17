import {createSlice} from "@reduxjs/toolkit";
import {Comment} from "interfaces/comment";
import {AddCommentAction, DeleteCommentAction, UpdateCommentAction} from "./types";

const initialState: Array<Comment> = [
	{
		id: 0,
		cardId: 0,
		author: 'Author 1',
		text: 'Hello'
	}
]

export const comment = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment: (state, action: AddCommentAction) => {
			return [
				...state,
				action.payload
			]
		},
		deleteComment: (state, action: DeleteCommentAction) => {
			return state.filter(comment => comment.id !== action.payload)
		},
		updateComment: (state, action: UpdateCommentAction) => {
			return state.map(comment => {

				if (comment.id === action.payload.id) {
					return {
						...comment,
						...action.payload
					}
				}

				return comment
			})
		}
	}
})

export default comment.reducer
