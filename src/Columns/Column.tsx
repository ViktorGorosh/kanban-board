import React, {useState} from "react";
import './Column.scss';
import {ICard} from "../App";
import Card from "../Card/Card";

interface IProps {
	title: string,
	cards: Array<ICard>,
	user: string,

	updateColTitle: (oldTitle: string, newTitle: string) => void
	addCard: (title: string, colId: string) => void
	deleteCard: (id: number) => void
	updateCard: (id: number, content: ICard) => void
}

export default (props: IProps) => {

	const [title, setTitle] = useState(props.title)
	const [isAddingCard, setAddingCard] = useState(false)
	const [newCardTitle, setNewCardTitle] = useState('')

	const cards = props.cards.filter(card => card.colId === props.title).map(card => {
		return (
			<Card
				key={card.id}
				user={props.user}
				content={card}
				deleteCard={props.deleteCard}
				updateCard={props.updateCard}
			/>
		)
	});


	return (
		<div className="col-md-3 column">
			<div className="card Column">
				<input
					type='text'
					className="form-control"
					defaultValue={title}
					onChange={e => {
						setTitle(e.target.value);
					}}
					onBlur={() => {
						props.updateColTitle(props.title, title)
					}}
				>{}</input>
				<ul className="list-group list-group-flush cards">
					{cards}
				</ul>
				{isAddingCard ?
					<div className='adding-card'>
						<input
							type="text"
							className="form-control adding-card__input"
							placeholder='Введите название карточки'
							autoFocus={true}
							onChange={(e) => setNewCardTitle(e.target.value)}
						/>
						<button
							type="button"
							className="btn btn-secondary adding-card__button"
							onClick={() => {
								setAddingCard(false)
								props.addCard(newCardTitle, title)
							}}
						>Добавить</button>
					</div>
					:
					<button
						type="button"
						className="btn btn-primary add-card"
						onClick={() => setAddingCard(true)}
					>Добавить карточку</button>
				}
			</div>
		</div>
	)
}