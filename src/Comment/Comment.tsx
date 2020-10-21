import React from "react";
import {IComment} from "../App";

interface IProps {
	comIndex: number
	content: IComment
}

export default (props: IProps) => {
	return (
		<li className='list-group-item comment'>
			<p>{props.content.text}</p>
			<p className={'text-right'}>- {props.content.author}</p>
		</li>
	)
}