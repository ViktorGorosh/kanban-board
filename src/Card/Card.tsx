import React, {useCallback, useState} from "react";
import './Card.scss'
import {ICard, IComment} from "../App";
// import CardOpen from "./CardOpen/CardOpen";

interface IProps {
	card: ICard
	comments: Array<IComment>
	user: string
	onCardDelete: (id: number) => void
	onCardUpdate: (id: number, content: ICard) => void
}

export default (props: IProps) => {

	const [isActive, setActive] = useState(false)

	const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);


	return (
		<React.Fragment>
			<li
				className="list-group-item cards__item"
				onClick={onToggleActive}
			>
				{props.card.title}
				<span className={'badge badge-info float-right'}>{props.comments.length}</span>
			</li>
			{/*{isActive ?*/}
			{/*	// <CardOpen*/}
			{/*	// 	content={props.content}*/}
			{/*	// 	close={toggleActive}*/}
			{/*	// 	deleteCard={props.deleteCard}*/}
			{/*	// 	saveChanges={props.updateCard}*/}
			{/*	// 	user={props.user}*/}
			{/*	// />*/}
			{/*: null*/}
			{/*}*/}
		</React.Fragment>
	)
}