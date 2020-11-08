import React, {useCallback, useState} from "react";
import './ColumnItem.scss';
// import {Card, CardChanges, Comment} from "../../../../App";
// import CardItem from "../../../../CardItem/CardItem";

import {useSelector, useDispatch} from 'react-redux'
import {selectUser} from "../../../state/ducks/auth/authSlice";
import {selectColTitle} from "../../../state/ducks/column/columnSlice";
import {changeTitle} from "../../../state/ducks/column/columnSlice";

interface ColumnItemProps {
	// title: string,
	colId: number,
	// cards: Array<Card>,
	// comments: Array<Comment>
	// user: string,

	// onColTitleUpdate: (id: number, newTitle: string) => void
	// onCardAdd: (title: string, colId: number) => void
	// onCardDelete: (id: number) => void
	// onCardUpdate: (id: number, changes: CardChanges) => void
	//
	// onCommentAdd: (text: string, cardId: number) => void
	// onCommentDelete: (id: number) => void
	// onCommentUpdate: (id: number, text: string) => void
}

export default ({colId}: ColumnItemProps) => {

	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const title = useSelector(state => selectColTitle(state, colId))

	// const {title, colId, cards, comments, user} = props
	const [colTitle, setColTitle] = useState(title)
	// const [isAddingCard, setAddingCard] = useState(false)
	// const [newCardTitle, setNewCardTitle] = useState('')

	const onChangeColTitle = useCallback(e => setColTitle(e.target.value), [])
	const onColTitleUpdate = useCallback(() => dispatch(changeTitle({id: colId, newTitle: colTitle})), [colTitle, dispatch])
	// const onChangeNewCardTitle = useCallback(e => setNewCardTitle(e.target.value), [])
	// const onCardAdd = useCallback(() => {
	// 	setAddingCard(false)
	// 	handleCardAdd(newCardTitle, colId)
	// }, [newCardTitle, colId, handleCardAdd])
	// const onToggleAddingCard = useCallback(() => {
	// 	setAddingCard(true)
	// 	setNewCardTitle('')
	// }, [])

	return (
		<div className="col-md-3 column">
			<div className="card Column">
				<input
					type='text'
					className="form-control"
					defaultValue={title}
					onChange={onChangeColTitle}
					onBlur={onColTitleUpdate}
				/>
				<ul className="list-group list-group-flush cards">
					{/*{cards.map(card => {*/}
					{/*		return (*/}
					{/*			<CardItem*/}
					{/*				key={card.id}*/}
					{/*				user={user}*/}
					{/*				colTitle={title}*/}
					{/*				card={card}*/}
					{/*				comments={comments.filter(comment => comment.cardId === card.id)}*/}

					{/*				onCardDelete={onCardDelete}*/}
					{/*				onCardUpdate={onCardUpdate}*/}

					{/*				onCommentAdd={onCommentAdd}*/}
					{/*				onCommentDelete={onCommentDelete}*/}
					{/*				onCommentUpdate={onCommentUpdate}*/}
					{/*			/>*/}
					{/*		)*/}
					{/*	})*/}
					{/*}*/}
				</ul>
				{/*{isAddingCard ?*/}
				{/*	<div className='adding-card'>*/}
				{/*		<input*/}
				{/*			type="text"*/}
				{/*			className="form-control adding-card__input"*/}
				{/*			placeholder='Enter card title...'*/}
				{/*			autoFocus={true}*/}
				{/*			// onChange={onChangeNewCardTitle}*/}
				{/*		/>*/}
				{/*		<button*/}
				{/*			type="button"*/}
				{/*			className="btn btn-secondary adding-card__button"*/}
				{/*			// onClick={onCardAdd}*/}
				{/*		>Add</button>*/}
				{/*	</div>*/}
				{/*	:*/}
				{/*	<button*/}
				{/*		type="button"*/}
				{/*		className="btn btn-primary add-card"*/}
				{/*		// onClick={onToggleAddingCard}*/}
				{/*	>Add card</button>*/}
				{/*}*/}
			</div>
		</div>
	)
}
