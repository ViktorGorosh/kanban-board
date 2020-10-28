import React, {useCallback, useState} from "react";
import './Column.scss';
import {ICard, IComment} from "../App";
import Card from "../Card/Card";

interface IProps {
	title: string,
	colId: number,
	cards: Array<ICard>,
	comments: Array<IComment>
	user: string,

	onColTitleUpdate: (id: number, newTitle: string) => void
	onCardAdd: (title: string, colId: number) => void
	onCardDelete: (id: number) => void
	onCardUpdate: (id: number, key: 'title' | 'description', value: string | null) => void
}

export default (props: IProps) => {

	const [colTitle, setColTitle] = useState(props.title)
	const [isAddingCard, setAddingCard] = useState(false)
	const [newCardTitle, setNewCardTitle] = useState('')
	
	const onChangeColTitle = useCallback(e => setColTitle(e.target.value), [])
	const onColTitleUpdate = useCallback(() => props.onColTitleUpdate(props.colId, colTitle), [colTitle, props])
	const onChangeNewCardTitle = useCallback(e => setNewCardTitle(e.target.value), [])
	const onCardAdd = useCallback(() => {
		setAddingCard(false)
		props.onCardAdd(newCardTitle, props.colId)
	}, [newCardTitle, props])
	const onToggleAddingCard = useCallback(() => setAddingCard(true), [])

	return (
		<div className="col-md-3 column">
			<div className="card Column">
				<input
					type='text'
					className="form-control"
					defaultValue={props.title}
					onChange={onChangeColTitle}
					onBlur={onColTitleUpdate}
				/>
				<ul className="list-group list-group-flush cards">
					{props.cards.map(card => {
							return (
								<Card
									key={card.id}
									user={props.user}
									colTitle={props.title}
									card={card}
									comments={props.comments.filter(comment => comment.cardId === card.id)}

									onCardDelete={props.onCardDelete}
									onCardUpdate={props.onCardUpdate}
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
							placeholder='Введите название карточки'
							autoFocus={true}
							onChange={onChangeNewCardTitle}
						/>
						<button
							type="button"
							className="btn btn-secondary adding-card__button"
							onClick={onCardAdd}
						>Добавить</button>
					</div>
					:
					<button
						type="button"
						className="btn btn-primary add-card"
						onClick={onToggleAddingCard}
					>Добавить карточку</button>
				}
			</div>
		</div>
	)
}