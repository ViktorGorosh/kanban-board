import React, {Component} from "react";

interface IProps {
	cardIndex: number,
	preview: boolean,
	openWide: () => void,
	title: string,
}

class Card extends Component<IProps, any> {
	render() {
		if (this.props.preview) {
			return (
				<li className="list-group-item">
					<span onClick={() => console.log('Card is open', this.props.cardIndex)}>{this.props.title}</span>
				</li>
			)
		}
	}
}

export default Card