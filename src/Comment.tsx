import React from "react";
import {IComment} from "./App";

interface IProps {
	content: IComment
}

export default (props: IProps) => {
	return (
		<li className='list-group-item'>{props.content.text}</li>
	)
}