import React, {Component} from 'react'
import './App.scss'
import AuthPopup from "./app/views/components/AuthPopup";
// import ColumnItem from "./ColumnItem/ColumnItem";

import store from "./app/store";


interface AppState {
	isAuthorized: boolean,
}

interface Column {
	id: number,
	title: string
}

export interface Card {
	colId: number,
	id: number,
	title: string,
	description: string | null,
	author: string
}

export interface Comment {
	id: number,
	cardId: number,
	author: string,
	text: string,
}

export interface CardChanges {
	title?: Card['title']
	description?: Card['description']
}

class App extends Component<{}, AppState>{

	constructor(props) {
		super(props);

		// @ts-ignore
		this.state = store.getState().user.isAuthorized
	}

	// handleUserUpdate = (name: string): void => {
	// 	if (name !== '') {
	// 		this.setState(() => ({
	// 			isAuthorized: true,
	// 			user: name
	// 		}))
	// 	}
	// }
	//
	// handleColTitleUpdate = (id: number, newTitle: string): void => {
	// 	if (newTitle === '') return
	// 	this.setState((prevState) => ({
	// 		columns: prevState.columns.map((column) => {
	// 			if (column.id === id) {
	// 				return {...column, title: newTitle}
	// 			}
	// 			return column
	// 		}),
	// 		cards: prevState.cards.map((card) => {
	// 			if (card.colId === id) {
	// 				return {
	// 					...card,
	// 					colId: id
	// 				}
	// 			}
	// 			return card
	// 		})
	// 	}))
	// }
	//
	// handleCardAdd = (title: string, colId: number): void => {
	// 	if (title === '') return
	// 	this.setState((prevState) => ({
	// 		cards: [...prevState.cards,
	// 			{colId, id: prevState.nextId, title, description: null, author: prevState.user}
	// 		],
	// 		nextId: prevState.nextId + 1
	// 	}))
	// }
	//
	// handleCardDelete = (id: number): void => {
	// 	this.setState(prevState => ({
	// 		cards: prevState.cards.filter(card => card.id !== id)
	// 	}))
	// }
	//
	// handleCardUpdate = (id: number, changes: CardChanges): void => {
	// 	this.setState(prevState => ({
	// 		cards: prevState.cards.map(card => {
	// 			if (card.id === id) {
	// 				return {...card, ...changes}
	// 			}
	// 			return card
	// 		})
	// 	}))
	// }
	//
	// handleCommentAdd = (text: string, cardId: number): void => {
	// 	if (text === '') return
	// 	this.setState(prevState => ({
	// 		comments: [...prevState.comments, {id: prevState.nextId, cardId, author: prevState.user, text}],
	// 		nextId: prevState.nextId + 1
	// 	}))
	// }
	//
	// handleCommentDelete = (id: number): void => {
	// 	this.setState(prevState => ({
	// 		comments: prevState.comments.filter(comment => comment.id !== id)
	// 	}))
	// }
	//
	// handleCommentUpdate = (id: number, text: string): void => {
	// 	if (text === '') return
	// 	this.setState(prevState => ({
	// 		comments: prevState.comments.map(comment => {
	// 			if (comment.id === id) return {...comment, text}
	// 			return comment
	// 		})
	// 	}))
	// }

	componentDidMount() {
		store.subscribe(() => {
			this.setState(() => ({
					isAuthorized: store.getState().user.isAuthorized
				})
			)
		})
	}

	// componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any) {
	// 	console.log(this.state) // нужно текущее состояние, а не предыдущее
	// 	const savedState = {...this.state, isAuthorized: false}
	// 	localStorage.setItem('state', JSON.stringify(savedState))
	// }

	render() {
		return (
			<>
				{this.state.isAuthorized ? null :
					<AuthPopup />
				}
				<header className='main-header text-center'>
					<h1 className='title'>NotTrelloAtAll</h1>
				</header>
				<section className='section-board'>
					<div className="container-fluid">
						<div className="row">
							{/*{this.state.columns.map((column) => {*/}
							{/*	return (*/}
							{/*		<ColumnItem*/}
							{/*			key={column.id}*/}
							{/*			colId={column.id}*/}
							{/*			title={column.title}*/}
							{/*			cards={this.state.cards.filter(card => card.colId === column.id)}*/}
							{/*			comments={this.state.comments}*/}
							{/*			user={this.state.user}*/}

							{/*			onColTitleUpdate={this.handleColTitleUpdate}*/}
							{/*			onCardAdd={this.handleCardAdd}*/}
							{/*			onCardDelete={this.handleCardDelete}*/}
							{/*			onCardUpdate={this.handleCardUpdate}*/}

							{/*			onCommentAdd={this.handleCommentAdd}*/}
							{/*			onCommentDelete={this.handleCommentDelete}*/}
							{/*			onCommentUpdate={this.handleCommentUpdate}*/}
							{/*		/>*/}
							{/*	)*/}
							{/*})}*/}
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default App
