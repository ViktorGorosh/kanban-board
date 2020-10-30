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
	const {colTitle, card, comments, onCardDelete, onCardUpdate, onCommentAdd, onCommentDelete,
		onCommentUpdate} = props
	const [isActive, setActive] = useState(false)

	const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);


	return (
		<>
			<li
				className="list-group-item cards__item"
				onClick={onToggleActive}
			>
				{card.title}
				<span className={'badge badge-info float-right'}>{comments.length}</span>
			</li>
			{isActive ?
				<CardOpen
					colTitle={colTitle}
					card={card}
					comments={comments}
					onClose={onToggleActive}

					onCardDelete={onCardDelete}
					onCardUpdate={onCardUpdate}

					onCommentAdd={onCommentAdd}
					onCommentDelete={onCommentDelete}
					onCommentUpdate={onCommentUpdate}
				/>
			: null
			}
		</>
	)
}