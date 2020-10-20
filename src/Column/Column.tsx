import React from "react";
import './Column.scss';
import Card from "../Card/Card";
import {IColumn} from "../App";

interface IProps {
	content: IColumn
	colIndex: number
	changeColTitle: (event: any) => void
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
					onInput={props.changeColTitle}
				>{}</input>
				<ul className="list-group list-group-flush">
					{cards}
				</ul>
				<button
					type="button"
					className="btn btn-primary add-card"
					onClick={props.addCard}
				>Добавить карточку</button>
			</div>
		</div>
	)
}