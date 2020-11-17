import React, {useCallback, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {selectColumnCards, addCard} from "state/ducks/card";
import {changeTitle} from "state/ducks/column";
import {selectUser} from "state/ducks/user";
import CardItem from "views/components/CardItem/CardItem";
import {Column} from "interfaces/column";
import {User} from "interfaces/user";
import {Card} from "interfaces/card";
import './ColumnItem.scss';

interface ColumnItemProps {
	column: Column,
}

export default ({column}: ColumnItemProps) => {

	const dispatch = useDispatch()
	const user: User = useSelector(selectUser)
	const cards: Array<Card> = useSelector(state => selectColumnCards(state, column.id))

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
		dispatch(addCard({colId: column.id, newTitle: newCardTitle, author: user.name}))

	}, [column.id, dispatch, newCardTitle, user])

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
