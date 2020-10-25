import React, {useState} from "react";
import './Card.scss'
import {ICard} from "../App";
import CardOpen from "./CardOpen/CardOpen";

interface IProps {
	content: ICard
}

export default (props: IProps) => {

	const [isActive, setActive] = useState(false)

	return (
		<li
			className="list-group-item cards__item"
			onClick={() => setActive(true)}
		>
			{props.content.title}
			<span className={'badge badge-info float-right'}>{props.content.comments.length}</span>
			{isActive ?
				<CardOpen content={props.content}/>
			: null}
		</li>
	)
}