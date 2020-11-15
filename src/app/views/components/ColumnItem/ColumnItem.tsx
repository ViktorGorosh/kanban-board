import React, {useCallback, useState} from "react";
import './ColumnItem.scss';
import CardItem from "../CardItem/CardItem";

import {useSelector, useDispatch} from 'react-redux'
import {changeTitle} from "../../../state/ducks/column/columnSlice";
import {selectColumnCards, addCard} from "../../../state/ducks/card/cardSlice";
import {selectNextId, incrementNextId} from "../../../state/ducks/nextId/nextIdSlice";
import {Column} from "../../../state/ducks/column/types";
import {selectUser} from "../../../state/ducks/auth/authSlice";

interface ColumnItemProps {
	column: Column,
}

export default ({column}: ColumnItemProps) => {

	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const nextId = useSelector(selectNextId)
	const cards = useSelector(state => selectColumnCards(state, column.id))

	const [colTitle, setColTitle] = useState(column.title)
	const [isAddingCard, setAddingCard] = useState(false)
	const [newCardTitle, setNewCardTitle] = useState('')

	const onChangeColTitle = useCallback(e => setColTitle(e.target.value), [])
	const onColTitleUpdate = useCallback(() => dispatch(changeTitle({id: column.id, newTitle: colTitle})),
		[column.id, colTitle, dispatch])
	const onChangeNewCardTitle = useCallback(e => setNewCardTitle(e.target.value), [])

	const onCardAdd = useCallback(() => {

		if (newCardTitle === '') return

		setAddingCard(false)
		dispatch(addCard({colId: column.id, id: nextId, newTitle: newCardTitle, author: user}))
		dispatch(incrementNextId())

	}, [column.id, dispatch, newCardTitle, nextId, user])

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
					defaultValue={column.title}
					onChange={onChangeColTitle}
					onBlur={onColTitleUpdate}
				/>
				<ul className="list-group list-group-flush cards">
					{cards.map(card => {
							return (
								<CardItem
									key={card.id}
									colTitle={column.title}
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
