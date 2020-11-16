import React, {useCallback, useState} from "react";
import {useSelector} from 'react-redux';
import {selectCardComments} from "state/ducks/comment/commentSlice";
import CardOpen from "views/components/CardItem/CardOpen/CardOpen";
import {Card} from "interfaces/card";
import {Comment} from "interfaces/comment";
import './CardItem.scss';

interface CardItemProps {
	colTitle: string
	card: Card
}

export default ({colTitle, card}: CardItemProps) => {

	const comments: Array<Comment> = useSelector(state => selectCardComments(state, card.id))
	const [isActive, setActive] = useState(false)

	const onToggleActive = useCallback(() => setActive(prevState => !prevState), []);


	return (
		<>
			<li
				className="list-group-item cards__item"
				onClick={onToggleActive}
			>
				{card.title}
				<span className={'badge badge-info float-right'}>{comments.length}</span>
			</li>
			{isActive ?
				<CardOpen
					colTitle={colTitle}
					card={card}
					onClose={onToggleActive}
				/>
			: null
			}
		</>
	)
}
