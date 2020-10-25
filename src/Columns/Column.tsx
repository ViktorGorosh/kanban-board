import React, {useState} from "react";
import './Column.scss'

interface IProps {
	title: string,
	colIndex: number,
	updateColTitle: (oldTitle: string, newTitle: string) => void
}

export default (props: IProps) => {

	const [title, setTitle] = useState(props.title)

	return (
		<div className="col-md-3 column">
			<div className="card">
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

				</ul>
			</div>
		</div>
	)
}