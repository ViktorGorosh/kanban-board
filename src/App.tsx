import React, {Component} from 'react'
import './App.scss'
import AuthPopup from "./AuthPopup/AuthPopup";
import Column from "./Column/Column";

interface IState {
	isAuthorized: boolean,
	user: string,
	nextId: number,
	columns: Array<IColumn>,
	cards: Array<ICard>
	comments: Array<IComment>
}

interface IColumn {
	id: number,
	title: string
}

export interface ICard {
	colId: number,
	id: number,
	title: string,
	description: string | null,
	author: string
}

export interface IComment {
	id: number,
	cardId: number,
	author: string,
	text: string,
}

class App extends Component<{}, IState>{

	constructor(props) {
		super(props);

		// @ts-ignore
		this.state = JSON.parse(localStorage.getItem('state')) ||  {
			isAuthorized: false,
			user: 'Аноним',
			nextId: 4,
			columns: [
				{id: 0, title: 'TO DO'},
				{id: 1, title: 'In Progress'},
				{id: 2, title: 'Testing'},
				{id: 3, title: 'done'}
			],
			cards: [
				{
					colId: 0,
					id: 0,
					title: 'Title 1',
					description: null,
					author: 'Author 1'
				}
			],
			comments: [
				{
					id: 0,
					cardId: 0,
					author: 'Author 1',
					text: 'Hello'
				},
			],
		}
	}

	handleUserUpdate = (name: string): void => {
		if (name !== '') {
			this.setState(() => ({
				isAuthorized: true,
				user: name
			}))
		}
	}

	handleColTitleUpdate = (id: number, newTitle: string): void => {
		if (newTitle === '') return
		this.setState((prevState) => ({
			columns: prevState.columns.map((column) => {
				if (column.id === id) {
					return {...column, title: newTitle}
				}
				return column
			}),
			cards: prevState.cards.map((card) => {
				if (card.colId === id) {
					return {
						...card,
						colId: id
					}
				}
				return card
			})
		}))
	}

	handleCardAdd = (title: string, colId: number): void => {
		if (title === '') return
		this.setState((prevState) => ({
			cards: [...prevState.cards,
				{colId, id: prevState.nextId, title, description: null, author: prevState.user}
			],
			nextId: prevState.nextId + 1
		}))
	}

	handleCardDelete = (id: number): void => {
		this.setState(prevState => ({
			cards: prevState.cards.filter(card => card.id !== id)
		}))
	}

	handleCardUpdate = (id: number, key: 'title' | 'description', value: string | null): void => {
		if (key === 'title' && value === '') return
		this.setState(prevState => ({
			cards: prevState.cards.map(card => {
				if (card.id === id) {
					return {...card, [key]: value}
				}
				return card
			})
		}))
	}

	handleCommentAdd = (text: string, cardId: number): void => {
		if (text === '') return
		this.setState(prevState => ({
			comments: [...prevState.comments, {id: prevState.nextId, cardId, author: prevState.user, text}],
			nextId: prevState.nextId + 1
		}))
	}

	handleCommentDelete = (id: number): void => {
		this.setState(prevState => ({
			comments: prevState.comments.filter(comment => comment.id !== id)
		}))
	}

	handleCommentUpdate = (id: number, text: string): void => {
		if (text === '') return
		this.setState(prevState => ({
			comments: prevState.comments.map(comment => {
				if (comment.id === id) return {...comment, text}
				return comment
			})
		}))
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state) // нужно текущее состояние, а не предыдущее
		const savedState = {...this.state, isAuthorized: false}
		localStorage.setItem('state', JSON.stringify(savedState))
	}

	render() {

		return (
			<>
				{this.state.isAuthorized ? null :
					<AuthPopup
						name={this.state.user}
						onUserUpdate={this.handleUserUpdate}
					/>
				}
				<header className='main-header text-center'>
					<h1 className='title'>NotTrelloAtAll</h1>
				</header>
				<section className='section-board'>
					<div className="container-fluid">
						<div className="row">
							{this.state.columns.map((column) => {
								return (
									<Column
										key={column.id}
										colId={column.id}
										title={column.title}
										cards={this.state.cards.filter(card => card.colId === column.id)}
										comments={this.state.comments}
										user={this.state.user}

										onColTitleUpdate={this.handleColTitleUpdate}
										onCardAdd={this.handleCardAdd}
										onCardDelete={this.handleCardDelete}
										onCardUpdate={this.handleCardUpdate}

										onCommentAdd={this.handleCommentAdd}
										onCommentDelete={this.handleCommentDelete}
										onCommentUpdate={this.handleCommentUpdate}
									/>
								)
							})}
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default App