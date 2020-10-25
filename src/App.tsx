import React, {Component} from 'react'
import './App.scss'
import AuthPopup from "./AuthPopup/AuthPopup";
import Column from "./Columns/Column";

interface IState {
	isAuthorized: boolean,
	user: string,
	nextId: number,
	columns: Array<string>,
	cards: Array<ICard>
}

export interface ICard {
	colId: string,
	id: number,
	title: string,
	description: string | null,
	comments: Array<IComment>,
	author: string
}

export interface IComment {
	id: number,
	author: string,
	text: string,
}

class App extends Component<{}, IState>{

	constructor(props) {
		super(props);
		this.state = {
			isAuthorized: false,
			user: 'Аноним',
			nextId: 1,
			columns: ['TO DO', 'In Progress', 'Testing', 'done'],
			cards: [
				{
					colId: 'TO DO',
					id: 0,
					title: 'Title 1',
					description: null,
					comments: [
						{
							id: 0,
							author: 'Author 1',
							text: 'Hello'
						},
					],
					author: 'Author 1'
				}
			]
		}
	}

	updateUser = (name: string): void => {
		if (name !== '') {
			this.setState(() => ({
				isAuthorized: true,
				user: name
			}))
		}
	}

	updateColTitle = (target: string, newTitle: string): void => {
		if (newTitle === '') return
		this.setState((prevState) => ({
			columns: prevState.columns.map((title) => {
				if (title === target) {
					return newTitle
				}
				return title
			}),
			cards: prevState.cards.map((card) => {
				if (card.colId === target) {
					return {
						...card,
						colId: newTitle
					}
				}
				return card
			})
		}))
	}

	addCard = (title: string, colId: string): void => {
		if (title === '') return
		this.setState((prevState) => ({
			cards: [...prevState.cards,
				{colId, id: prevState.nextId, title, description: null, comments: [], author: prevState.user}
			],
			nextId: prevState.nextId + 1
		}))
	}

	deleteCard = (id: number): void => {
		this.setState(prevState => ({
			cards: prevState.cards.filter(card => card.id !== id)
		}))
	}

	updateCard = (id: number, content: ICard): void => {
		this.setState(prevState => ({
			cards: prevState.cards.map(card => {
				if (card.id === id) {
					return content
				}
				return card
			})
		}))
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state)
	}

	render() {

		let columns = this.state.columns.map((column) => {
			return (
				<Column
					key={column}
					title={column}
					cards={this.state.cards}
					user={this.state.user}

					updateColTitle={this.updateColTitle}
					addCard={this.addCard}
					deleteCard={this.deleteCard}
					updateCard={this.updateCard}
				/>
			)
		})

		return (
			<React.Fragment>
				{this.state.isAuthorized ? null :
					<AuthPopup
						name={this.state.user}
						saveName={this.updateUser}
					/>
				}
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
		)
	}
}

export default App