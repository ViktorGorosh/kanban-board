import React, {useState} from "react";
import './Column.scss'
import {ICard} from "../App";
import Card from "../Card/Card";

interface IProps {
	title: string,
	colIndex: number,
	cards: Array<ICard>

	updateColTitle: (oldTitle: string, newTitle: string) => void
}

export default (props: IProps) => {

	const [title, setTitle] = useState(props.title)

	const cards = props.cards.filter(card => card.colId === props.title).map(card => {
		return (
			<Card
				content={card}
			/>
		)
	});


	return (
		<div className="col-md-3 column">
			<div className="card Card">
				<input
					type='text'
					className="form-control"
					defaultValue={title}
					onChange={e => {
						setTitle(e.target.value)
					}}
					onBlur={() => {
						props.updateColTitle(props.title, title)
					}}
				>{}</input>
				<ul className="list-group list-group-flush cards">
					{cards}
				</ul>
			</div>
		</div>
	)
}