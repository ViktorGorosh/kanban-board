import React, {KeyboardEvent, useState} from "react";
import {IComment} from "../App";

interface IProps {
	content: IComment,
	escHandler: (e: KeyboardEvent) => void
	deleteComment: (comIndex: number) => void
}

export default (props: IProps) => {

	const [text, setText] = useState(props.content.text)

	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote mb-0'>
				<textarea
					className='form-control'
					defaultValue={text}
					onKeyDown={props.escHandler}
					onChange={e => setText(e.target.value)}
				>{}</textarea>
				<footer className='blockquote-footer text-right'>{props.content.author}</footer>
			</blockquote>
			<button
				type="button"
				className="close"
				aria-label="Close"
				onClick={() => props.deleteComment(props.content.id)}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</li>
	)
}