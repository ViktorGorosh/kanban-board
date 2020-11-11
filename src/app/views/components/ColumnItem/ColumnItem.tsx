import React, {useCallback, useState} from "react";
import './ColumnItem.scss';
// import {Comment} from "../../../../App";
import CardItem from "../CardItem/CardItem";

import {useSelector, useDispatch} from 'react-redux'
// import {selectUser} from "../../../state/ducks/auth/authSlice";
import {selectColTitle, changeTitle} from "../../../state/ducks/column/columnSlice";
import {selectColumnCards, addCard} from "../../../state/ducks/card/cardSlice";
import {selectNextId, incrementNextId} from "../../../state/ducks/nextId/nextIdSlice";

interface ColumnItemProps {
	// title: string,
	colId: number,
	// cards: Array<Card>,
	// comments: Array<Comment>
	user: string,

	// onColTitleUpdate: (id: number, newTitle: string) => void
	// onCardAdd: (title: string, colId: number) => void
	// onCardDelete: (id: number) => void
	// onCardUpdate: (id: number, changes: CardChanges) => void
	//
	// onCommentAdd: (text: string, cardId: number) => void
	// onCommentDelete: (id: number) => void
	// onCommentUpdate: (id: number, text: string) => void
}

export default ({colId, user}: ColumnItemProps) => {

	const dispatch = useDispatch()
	// const user = useSelector(selectUser)
	const nextId = useSelector(selectNextId)
	const title = useSelector(state => selectColTitle(state, colId))
	const cards = useSelector(state => selectColumnCards(state, colId))

	const [colTitle, setColTitle] = useState(title)
	const [isAddingCard, setAddingCard] = useState(false)
	const [newCardTitle, setNewCardTitle] = useState('')

	const onChangeColTitle = useCallback(e => setColTitle(e.target.value), [])
	const onColTitleUpdate = useCallback(() => dispatch(changeTitle({id: colId, newTitle: colTitle})),
		[colId, colTitle, dispatch])
	const onChangeNewCardTitle = useCallback(e => setNewCardTitle(e.target.value), [])

	const onCardAdd = useCallback(() => {
		setAddingCard(false)
		dispatch(addCard({colId, id: nextId, newTitle: newCardTitle, author: user}))
		dispatch(incrementNextId())
	}, [colId, dispatch, newCardTitle, nextId, user])

	const onToggleAddingCard = useCallback(() => {
		setAddingCard(true)
		setNewCardTitle('')
	}, [])

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
					{cards.map(card => {
							return (
								<CardItem
									key={card.id}
									colTitle={colTitle}
									card={card}
								/>
							)
						})
					}
				</ul>
				{isAddingCard ?
					<div className='adding-card'>
						<input
							type="text"
							className="form-control adding-card__input"
							placeholder='Enter card title...'
							autoFocus={true}
							onChange={onChangeNewCardTitle}
						/>
						<button
							type="button"
							className="btn btn-secondary adding-card__button"
							onClick={onCardAdd}
						>Add</button>
					</div>
					:
					<button
						type="button"
						className="btn btn-primary add-card"
						onClick={onToggleAddingCard}
					>Add card</button>
				}
			</div>
		</div>
	)
}
