import React from "react";
import {ICard} from "../App";

interface IProps {
	colIndex: number
	cardIndex: number
	content: ICard

	openCard: (colIndex: number, cardIndex: number) => void
}

export default (props: IProps) => {
	return <li
		className="list-group-item"
		onClick={(event) => {props.openCard(props.colIndex, props.cardIndex)}}
	>{props.content.title}</li>
}