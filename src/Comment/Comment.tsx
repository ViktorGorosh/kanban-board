import React from "react";
import {IComment} from "../App";

interface IProps {
	comIndex: number
	content: IComment
	changeComment: (comIndex: number, newValue: string) => void
	escHandler: (event: object) => void
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
		</li>
	)
}