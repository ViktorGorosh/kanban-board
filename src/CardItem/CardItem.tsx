import React, {useCallback, useState} from "react";
import './CardItem.scss'
import {Card, Comment} from "../App";
import CardOpen from "./CardOpen/CardOpen";

interface CardItemProps {
	colTitle: string
	card: Card
	comments: Array<Comment>
	user: string
	onCardDelete: (id: number) => void
	onCardUpdate: (id: number, key: 'title' | 'description', value: string | null) => void

	onCommentAdd: (text: string, cardId: number) => void
	onCommentDelete: (id: number) => void
	onCommentUpdate: (id: number, text: string) => void
}

export default (props: CardItemProps) => {

	const [isActive, setActive] = useState(false)

	const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);


	return (
		<>
			<li
				className="list-group-item cards__item"
				onClick={onToggleActive}
			>
				{props.card.title}
				<span className={'badge badge-info float-right'}>{props.comments.length}</span>
			</li>
			{isActive ?
				<CardOpen
					colTitle={props.colTitle}
					card={props.card}
					comments={props.comments}
					user={props.user}
					onClose={onToggleActive}

					onCardDelete={props.onCardDelete}
					onCardUpdate={props.onCardUpdate}

					onCommentAdd={props.onCommentAdd}
					onCommentDelete={props.onCommentDelete}
					onCommentUpdate={props.onCommentUpdate}
				/>
			: null
			}
		</>
	)
}