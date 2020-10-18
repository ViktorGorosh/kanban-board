import React, {Component} from 'react';
import './App.scss';
import AuthPopup from "./AuthPopup/AuthPopup";
import Column from "./Column/Column";
import CardOpen from "./CardOpen/CardOpen";

interface IState {
	isAuthorized: boolean,
	currentUser: string,
	isCardActive: boolean,
	activeColIndex: number,
	activeCardIndex: number,
	columns: Array<IColumn>
}

export interface IColumn {
	columnTitle: string,
	cards: Array<ICard>
}

export interface ICard {
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
			isCardActive: false,
			activeColIndex: 0,
			activeCardIndex: 0,
			columns: [
				{
					columnTitle: 'TO DO',
					cards: [
						{
							title: 'Title 1',
							description: 'Desc 1',
							comments: [
								{
									author: 'Author of comment 1',
									text: 'Text of comment 1'
								},
							],

							author: 'Author 1'
						},
					]
				},
				{
					columnTitle: 'In Progress',
					cards: [
						{
							title: 'Title 1',
							description: 'Desc 1',
							comments: [
								{
									author: 'Author of comment 1',
									text: 'Text of comment 1'
								},
							],
							author: 'Author 1'
						},
					]
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
				<Column key={colIndex} content={column}/>
			)
		})

		const actCol = this.state.activeColIndex
		const actCard = this.state.activeCardIndex

		return (
			<React.Fragment>
				<AuthPopup
					currentUser={this.state.currentUser}
					onChangeName={this.onChangeName.bind(this)}
					onLogin={this.login.bind(this)}
				/>

				{this.state.isCardActive ?
					<CardOpen
						content={this.state.columns[actCol].cards[actCard]}
					/>
				: null}

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