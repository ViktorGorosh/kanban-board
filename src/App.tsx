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
	isAddingCard: boolean,
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
	cardTemplate = {
		title: '',
		description: '',
		comments: [],
		author: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			isAuthorized: false,
			currentUser: 'Виктор Горош',
			isCardActive: false,
			activeColIndex: 0,
			activeCardIndex: 0,
			isAddingCard: false,
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

	componentDidMount() {
		this.newUser = this.state.currentUser
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state)
	}

	changeName = (event) => {
		this.newUser = event.target.value
	}

	login = () => {
		if (this.newUser) {
			this.setState({
				isAuthorized: true,
				currentUser: this.newUser
			})
		}
	}

	changeColTitle = (newTitle, colIndex) => {
		this.setState((prevState) => {
			const newState = {...prevState}
			newState.columns[colIndex].columnTitle = newTitle
			return newState
		})
	}

	openAddCardMenu = (colIndex) => {
		this.setState((prevState) => {
			return {
				isAddingCard: true,
				activeColIndex: colIndex
			}
		})
	}

	addCard = (colIndex) => {
		// if (this.state.isAddingCard)
		// this.setState((prevState) => {
		// 	if (!this.state.isAddingCard) {
		// 		return {
		// 			isAddingCard: true
		// 		}
		// 	} else {
		// 		const newState = {...prevState}
		// 		const newCard = {...this.cardTemplate}
		// 		newCard.author = prevState.currentUser
		// 		newCard.title = 'New card'
		// 		newState.columns[colIndex].cards.push(newCard)
		// 		newState.isAddingCard = false
		// 		return newState
		// 	}
		// })
		console.log('Card added')
	}

	render() {

		let columns;
		columns = this.state.columns.map((column, colIndex) => {
			return (
				<Column
					key={colIndex}
					colIndex={colIndex} // ?
					activeColIndex={this.state.activeColIndex}
					content={column}
					isAddingCard={this.state.isAddingCard}
					changeColTitle={event => this.changeColTitle(event.target.value, colIndex)}
					openAddCardMenu={() => this.openAddCardMenu(colIndex)}
					addCard={() => this.addCard(colIndex)}
				/>
			)
		})

		const actCol = this.state.activeColIndex
		const actCard = this.state.activeCardIndex

		return (
			<React.Fragment>
				{this.state.isAuthorized ? null :
					<AuthPopup
						currentUser={this.state.currentUser}
						changeName={this.changeName.bind(this)}
						login={this.login}
					/>
				}

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