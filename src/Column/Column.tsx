import React from "react";
import './Column.scss';
import Card from "../Card/Card";
import {IColumn} from "../App";

interface IProps {
	content: IColumn
	colIndex: number
	activeColIndex: number
	isAddingCard: boolean
	changeColTitle: (event: any) => void
	changeNewCardTitle: (event: any) => void
	openAddCardMenu: () => void
	addCard: () => void
}

export default (props: IProps) => {

	let cards = props.content.cards.map((card, cardIndex) => {
		return (
			<Card key={cardIndex} content={card} />
		)
	})

	return (
		<div className="col-md-3 column">
			<div className="card">
				<input
					type='text'
					className="form-control"
					defaultValue={props.content.columnTitle}
					onChange={props.changeColTitle}
				>{}</input>
				<ul className="list-group list-group-flush">
					{cards}
				</ul>
				{props.isAddingCard && props.colIndex === props.activeColIndex ?
					<div className='adding-card'>
						<input
							type="text"
							className="form-control adding-card__input"
							placeholder='Введите название карточки'
							autoFocus={true}
							onInput={props.changeNewCardTitle}
						/>
						<button
							type="button"
							className="btn btn-secondary adding-card__button"
							onClick={props.addCard}
						>Добавить</button>
					</div>
					:
					<button
						type="button"
						className="btn btn-primary add-card"
						onClick={props.openAddCardMenu}
					>Добавить карточку</button>
				}
			</div>
		</div>
	)
}