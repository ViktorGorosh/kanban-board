import React, {KeyboardEvent} from "react";
import {IComment} from "../App";

interface IProps {
	content: IComment,
	escHandler: (e: KeyboardEvent) => void
}

export default (props: IProps) => {
	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote mb-0'>
				<textarea
					className='form-control'
					defaultValue={props.content.text}
					onKeyDown={props.escHandler}
				>{}</textarea>
				<footer className='blockquote-footer text-right'>{props.content.author}</footer>
			</blockquote>
			<button
				type="button"
				className="close"
				aria-label="Close"
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</li>
	)
}