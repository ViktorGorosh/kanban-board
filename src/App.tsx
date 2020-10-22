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
	isAddingComment: boolean,
	columns: Array<IColumn>
}

export interface IColumn {
	columnTitle: string,
	cards: Array<ICard>
}

export interface ICard {
	title: string,
	description: string | null,
	comments: Array<IComment>,
	author: string
}

export interface IComment {
	author: string,
	text: string,
}



class App extends Component<{}, IState> {

	newUser = '';
	newCardTitle = '';
	newComment = '';
	cardTemplate = {
		title: '',
		description: null,
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
			isAddingComment: false,
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
							title: 'Title 2',
							description: 'Desc 2',
							comments: [
								{
									author: 'Author of comment 1',
									text: 'Text of comment 1'
								},
								{
									author: 'Author of comment 2',
									text: 'Text of comment 2'
								},
							],
							author: 'Author 2'
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
		console.log('App updated')
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

	changeNewCardTitle = (event) => {
		this.newCardTitle = event.target.value
	}

	addCard = () => {
		if (this.newCardTitle && this.state.isAddingCard) {
			this.setState((prevState) => {
				const newCard = {...this.cardTemplate}
				newCard.title = this.newCardTitle
				newCard.author = prevState.currentUser
				const newState = {...prevState}
				newState.columns[prevState.activeColIndex].cards.push(newCard)
				this.newCardTitle = ''
				newState.isAddingCard = false
				return newState
			})
		}
	}

	openCard = (colIndex, cardIndex) => {
		this.setState((prevState) => {
			return {
				isCardActive: true,
				activeColIndex: colIndex,
				activeCardIndex: cardIndex,
			}
		})
	}

	closeOpenCard = () => {
		this.setState(prevState => {
			return {
				isCardActive: false
			}
		})
	}

	escHandler = (event) => {
		if (event.key === 'Escape') {
			this.closeOpenCard()
		}
	}

	deleteCard = () => {
		this.setState(prevState => {
			const newState = {...prevState}
			newState.columns[prevState.activeColIndex].cards.splice(prevState.activeCardIndex, 1)
			newState.isCardActive = false
			return newState
		})
	}

	changeCardField = (field, newValue) => {
		this.setState(prevState => {
			const newState = {...prevState}
			const card = newState.columns[prevState.activeColIndex].cards[prevState.activeCardIndex]
			card[field] = newValue
			return newState
		})
	}

	changeComment = (comIndex, newValue) => {
		this.setState(prevState => {
			const newState = {...prevState}
			const card = newState.columns[prevState.activeColIndex].cards[prevState.activeCardIndex]
			card.comments[comIndex].text = newValue
			return newState
		})
	}

	openAddCommentMenu = () => {
		this.setState((prevState) => {
			return {
				isAddingComment: true,
			}
		})
	}

	changeNewComment = (event) => {
		this.newComment = event.target.value
	}

	addComment = () => {
		if (this.newComment) {
			this.setState(prevState => {
				const newState = {...prevState}
				const card = newState.columns[prevState.activeColIndex].cards[prevState.activeCardIndex]
				card.comments.push({
					text: this.newComment,
					author: prevState.currentUser
				})
				this.newComment = ''
				newState.isAddingComment = false
				return newState
			})
		}
	}

	render() {

		let columns;
		columns = this.state.columns.map((column, colIndex) => {
			return (
				<Column
					key={colIndex}
					colIndex={colIndex}
					activeColIndex={this.state.activeColIndex}
					content={column}
					isAddingCard={this.state.isAddingCard}

					changeColTitle={event => this.changeColTitle(event.target.value, colIndex)}
					openAddCardMenu={() => this.openAddCardMenu(colIndex)}
					changeNewCardTitle = {event => this.changeNewCardTitle(event)}
					addCard={this.addCard}
					openCard={this.openCard}
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
						colTitle={this.state.columns[actCol].columnTitle}
						isAddingComment={this.state.isAddingComment}
						close={this.closeOpenCard}
						escHandler={this.escHandler}
						deleteCard={this.deleteCard}
						changeCardField={this.changeCardField}
						changeComment={this.changeComment}
						openAddCommentMenu={this.openAddCommentMenu}
						changeNewComment={this.changeNewComment}
						addComment={this.addComment}
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