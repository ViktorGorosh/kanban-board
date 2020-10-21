import React from "react";
import {ICard} from "../App";
import './Card.scss'

interface IProps {
	colIndex: number
	cardIndex: number
	content: ICard

	openCard: (colIndex: number, cardIndex: number) => void
}

export default (props: IProps) => {
	return (
		<li
			className="list-group-item cards__item"
			onClick={() => {props.openCard(props.colIndex, props.cardIndex)}}
		>
			{props.content.title}
			<span className={'badge badge-info float-right'}>{props.content.comments.length}</span>
		</li>
	)

}