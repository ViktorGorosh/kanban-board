import React from "react";
import {IComment} from "../App";
import './Comment.scss'

interface IProps {
	comIndex: number
	content: IComment
	changeComment: (comIndex: number, newValue: string) => void
	escHandler: (event: object) => void
	deleteComment: (comIndex: number) => void
}

export default (props: IProps) => {
	return (
		<li className='list-group-item comment'>
			<blockquote className='blockquote'>
				<textarea
					className='form-control'
					defaultValue={props.content.text}
					onKeyDown={props.escHandler}
					onChange={(event) => {props.changeComment(props.comIndex, event.target.value)}}
				>{}</textarea>
				<footer className='blockquote-footer text-right'>{props.content.author}</footer>
			</blockquote>
			<button
				type="button"
				className="close"
				aria-label="Close"
				onClick={event => props.deleteComment(props.comIndex)}
			>
				<span aria-hidden="true">&times;</span>
			</button>
		</li>
	)
}