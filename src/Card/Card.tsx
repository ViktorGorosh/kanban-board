import React, {useCallback, useState} from "react";
import './Card.scss'
import {ICard, IComment} from "../App";
import CardOpen from "./CardOpen/CardOpen";

interface IProps {
	colTitle: string
	card: ICard
	comments: Array<IComment>
	user: string
	onCardDelete: (id: number) => void
	onCardUpdate: (id: number, key: 'title' | 'description', value: string | null) => void

	onCommentAdd: (text: string, cardId: number) => void
	onCommentDelete: (id: number) => void
	onCommentUpdate: (id: number, text: string) => void
}

export default (props: IProps) => {

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