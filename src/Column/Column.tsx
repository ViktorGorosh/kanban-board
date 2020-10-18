import React from "react";
import './Column.scss';
import Card from "../Card/Card";
import {IColumn} from "../App";

interface IProps {
	content: IColumn
}

export default (props: IProps) => {
	return (
		<div className="col-md-3 column">
			<div className="card">
				<textarea
					className="form-control"
					defaultValue={props.content.columnTitle}
				>{}</textarea>
				<ul className="list-group list-group-flush">
				</ul>
				<button type="button" className="btn btn-primary add-card">Добавить карточку</button>
			</div>
		</div>
	)
}