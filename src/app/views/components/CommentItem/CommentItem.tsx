import React, {useCallback, useState} from "react";
import {Comment} from "../../../state/ducks/comment/types";
import {useDispatch} from 'react-redux'
import {updateComment, deleteComment} from "../../../state/ducks/comment/commentSlice";

interface CommentItemProps {
	comment: Comment,
}

export default ({comment}: CommentItemProps) => {

	const [text, setText] = useState(comment.text)

	const dispatch = useDispatch()

	const onCommentTextChange = useCallback(e => setText(e.target.value), [])

	const onCommentUpdate = useCallback(() => {

		if (text === '') return

		dispatch(updateComment({id: comment.id, text}))
	},[comment.id, dispatch, text])

	const onCommentDelete = useCallback(() => {
		dispatch(deleteComment(comment.id))
	},[comment.id, dispatch])

	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote mb-0'>
				<textarea
					className='form-control mb-2'
					defaultValue={text}
					onChange={onCommentTextChange}
				/>
				<div className="d-flex justify-content-between">
					<button
						className='btn btn-secondary d-block'
						onClick={onCommentUpdate}
					>Save</button>
					<footer className='blockquote-footer text-right'>{comment.author}</footer>
				</div>
			</blockquote>
			<button
				type="button"
				className="close"
				aria-label="Close"
				onClick={onCommentDelete}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</li>
	)
}
