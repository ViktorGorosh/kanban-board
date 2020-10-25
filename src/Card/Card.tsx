import React, {useEffect, useState} from "react";
import './Card.scss'
import {ICard} from "../App";
import CardOpen from "./CardOpen/CardOpen";

interface IProps {
	content: ICard
}

export default (props: IProps) => {

	const [isActive, setActive] = useState(false)

	const toggleActive = () => {
		setActive(prevState => !prevState)
	}

	return (
		<React.Fragment>
			<li
				className="list-group-item cards__item"
				onClick={toggleActive}
			>
				{props.content.title}
				<span className={'badge badge-info float-right'}>{props.content.comments.length}</span>
			</li>
			{isActive ?
				<CardOpen
					content={props.content}
					close={toggleActive}
				/>
			: null
			}
		</React.Fragment>

	)
}