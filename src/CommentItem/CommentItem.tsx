import React, {KeyboardEvent, useCallback, useState} from "react";
import {Comment} from "../App";

interface CommentItemProps {
	comment: Comment,
	onEscape: (e: KeyboardEvent) => void
	
	onCommentDelete: (id: number) => void
	onCommentUpdate: (id: number, text: string) => void
}

export default (props: CommentItemProps) => {

	const {comment, onCommentDelete: handleCommentDelete, onCommentUpdate: handleCommentUpdate, onEscape} = props

	const [text, setText] = useState(comment.text)
	
	const onCommentTextChange = useCallback(e => setText(e.target.value), [])
	const onCommentUpdate = useCallback(() => handleCommentUpdate(comment.id, text),
		[handleCommentUpdate, comment.id, text, ])
	const onCommentDelete = useCallback(() => handleCommentDelete(comment.id),
		[handleCommentDelete, comment.id])
	
	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote mb-0'>
				<textarea
					className='form-control mb-2'
					defaultValue={text}
					onKeyDown={onEscape}
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