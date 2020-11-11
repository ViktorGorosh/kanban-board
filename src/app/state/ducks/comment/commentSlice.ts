import {createSlice} from "@reduxjs/toolkit";
import {AddCommentAction, Comment, DeleteCommentAction, UpdateCommentAction} from "./types";
import {Card, UpdateCardAction} from "../card/types";

const initialState: Array<Comment> = [
	{
		id: 0,
		cardId: 0,
		author: 'Author 1',
		text: 'Hello'
	}
]

const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		addComment: (state: Array<Comment>, action: AddCommentAction) => {
			return [
				...state,
				action.payload
			]
		},
		deleteComment: (state: Array<Comment>, action: DeleteCommentAction) => {
			return state.filter(comment => comment.id !== action.payload)
		},
		updateComment: (state: Array<Comment>, action: UpdateCommentAction) => {
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

export const {addComment, deleteComment, updateComment} = commentSlice.actions

export const selectCardComments = (state, cardId) => {
	return state.comments.filter(comment => comment.cardId === cardId)
}

export default commentSlice.reducer
