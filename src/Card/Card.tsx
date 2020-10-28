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
					onClose={onToggleActive}
					onCardDelete={props.onCardDelete}
					onCardUpdate={props.onCardUpdate}
					user={props.user}
				/>
			: null
			}
		</>
	)
}