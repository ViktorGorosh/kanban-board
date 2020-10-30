import React, {KeyboardEvent, useCallback, useState} from "react";
import {Comment} from "../App";

interface CommentItemProps {
	comment: Comment,
	onEscape: (e: KeyboardEvent) => void
	
	onCommentDelete: (id: number) => void
	onCommentUpdate: (id: number, text: string) => void
}

export default (props: CommentItemProps) => {

	const [text, setText] = useState(props.comment.text)
	
	const onCommentTextChange = useCallback(e => setText(e.target.value), [])
	const onCommentUpdate = useCallback(() => props.onCommentUpdate(props.comment.id, text), [text, props])
	const onCommentDelete = useCallback(() => props.onCommentDelete(props.comment.id), [props])
	
	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote mb-0'>
				<textarea
					className='form-control mb-2'
					defaultValue={text}
					onKeyDown={props.onEscape}
					onChange={onCommentTextChange}
				/>
				<div className="d-flex justify-content-between">
					<button
						className='btn btn-secondary d-block'
						onClick={onCommentUpdate}
					>Сохранить</button>
					<footer className='blockquote-footer text-right'>{props.comment.author}</footer>
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