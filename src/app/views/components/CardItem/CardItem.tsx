import React, {useCallback, useState} from "react";
import './CardItem.scss'
import {Comment} from "../../../../App";
import CardOpen from "./CardOpen/CardOpen";

import {useSelector, useDispatch} from 'react-redux'
// import {selectCardTitle} from "../../../state/ducks/card/cardSlice";
import {Card} from "../../../state/ducks/card/types";

interface CardItemProps {
	// cardId: number
	colTitle: string
	card: Card
	// comments: Array<Comment>
	// user: string
	// onCardDelete: (id: number) => void
	// onCardUpdate: (id: number, changes: CardChanges) => void
	//
	// onCommentAdd: (text: string, cardId: number) => void
	// onCommentDelete: (id: number) => void
	// onCommentUpdate: (id: number, text: string) => void
}

export default ({colTitle, card}: CardItemProps) => {

	const dispatch = useDispatch()
	// const title = useSelector(state => selectCardTitle(state, card.id))

	// const {colTitle, card, comments, onCardDelete, onCardUpdate, onCommentAdd, onCommentDelete,
	// 	onCommentUpdate} = props
	const [isActive, setActive] = useState(false)

	const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);


	return (
		<>
			<li
				className="list-group-item cards__item"
				onClick={onToggleActive}
			>
				{card.title}
				{/*<span className={'badge badge-info float-right'}>{comments.length}</span>*/}
			</li>
			{isActive ?
				<CardOpen
					colTitle={colTitle}
					card={card}
					// comments={comments}
					onClose={onToggleActive}
					//
					// onCardDelete={onCardDelete}
					// onCardUpdate={onCardUpdate}
					//
					// onCommentAdd={onCommentAdd}
					// onCommentDelete={onCommentDelete}
					// onCommentUpdate={onCommentUpdate}
				/>
			: null
			}
		</>
	)
}
