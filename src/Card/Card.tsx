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
			onClick={(event) => {props.openCard(props.colIndex, props.cardIndex)}}
		>
			<p>{props.content.title}</p>
			<p className={'cards__comments'}>Комментариев: {props.content.comments.length}</p>
		</li>
	)

}