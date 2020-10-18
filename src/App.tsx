import React, {Component} from 'react';
import './App.scss';
import AuthPopup from "./AuthPopup/AuthPopup";
import Card from "./Card/Card";
import Column from "./Column/Column";

interface IState {
	isAuthorized: boolean,
	currentUser: string,
	activeCard: object | null,
	columns: Array<IColumn>
}

export interface IColumn {
	columnTitle: string,
	cards: Array<ICard>
}

interface ICard {
	title: string,
	description: string,
	comments: Array<IComment>,
	author: string
}

interface IComment {
	author: string,
	text: string,
}

class App extends Component<{}, IState> {

	newUser = '';

	constructor(props) {
		super(props);
		this.state = {
			isAuthorized: false,
			currentUser: 'Виктор Горош',
			activeCard: null,
			columns: [
				{
					columnTitle: 'TO DO',
					cards: []
				},
				{
					columnTitle: 'In Progress',
					cards: []
				},
				{
					columnTitle: 'Testing',
					cards: []
				},
				{
					columnTitle: 'Done',
					cards: []
				},
			]
		}
	}

	login = () => {
		if (this.newUser !== '') {
			console.log('You are in')
			this.setState({
				isAuthorized: true,
				currentUser: this.newUser
			})
		}
	}

	onChangeName = (event) => {
		this.newUser = event.target.value
	}

	ChangeColumnName = (event) => {
		this.setState((prevState) => {
			return {

			}
		})
	}

	render() {
		// let cards
		// cards = this.state.columns[0].cards.map((card, cardIndex) => {
		// 	return (
		// 		<Card
		// 			key={cardIndex}
		// 			cardIndex={cardIndex}
		// 			preview={true}
		// 			openWide={() => console.log('Card is open')}
		// 			title={card.title}
		// 		/>
		// 	)
		// })

		let columns;
		columns = this.state.columns.map((column, colIndex) => {
			return (
				<Column content={column}/>
			)
		})
		return (
			<React.Fragment>
				<AuthPopup
					currentUser={this.state.currentUser}
					onChangeName={this.onChangeName.bind(this)}
					onLogin={this.login.bind(this)}
				/>
				<header className='main-header text-center'>
					<h1 className='title'>NotTrelloAtAll</h1>
				</header>
				<section className='section-board'>
					<div className="container-fluid">
						<div className="row">
							{columns}
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default App;