import React from 'react'
import './App.scss'
import AuthPopup from "./app/views/components/AuthPopup/AuthPopup";
import ColumnItem from "./app/views/components/ColumnItem/ColumnItem";
import {useSelector} from 'react-redux'
import {selectUser} from "./app/state/ducks/auth/authSlice";
import {selectColumns} from "./app/state/ducks/column/columnSlice";

// interface AppState {
// 	user: AuthState
// 	columns: Array<Column>
// }

// export interface Card {
// 	colId: number,
// 	id: number,
// 	title: string,
// 	description: string | null,
// 	author: string
// }

// export interface Comment {
// 	id: number,
// 	cardId: number,
// 	author: string,
// 	text: string,
// }

// export interface CardChanges {
// 	title?: Card['title']
// 	description?: Card['description']
// }

// function mapStateToProps(state) {
// 	return {
// 		user: state.user,
// 		columns: state.columns
// 	}
// }

export default () => {

	const user = useSelector(selectUser)
	const columns = useSelector(selectColumns)
	// constructor(props) {
	// 	super(props);
	//
	// 	this.state = store.getState()
	// }

	// componentDidMount() {
	// 	// store.subscribe(() => {
	// 	// 	this.setState(() => ({
	// 	// 			...store.getState()
	// 	// 		})
	// 	// 	)
	// 	// })
	// }

	// componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>, snapshot?: any) {
	// 	console.log(this.state) // нужно текущее состояние, а не предыдущее
	// 	const savedState = {...this.state, isAuthorized: false}
	// 	localStorage.setItem('state', JSON.stringify(savedState))
	// }
	return (
		<>
			{user.isAuthorized ? null :
				<AuthPopup />
			}
			<header className='main-header text-center'>
				<h1 className='title'>NotTrelloAtAll</h1>
			</header>
			<section className='section-board'>
				<div className="container-fluid">
					<div className="row">
						{columns.map((column) => {
							return (
								<ColumnItem
									key={column.id}
									colId={column.id}
									// title={column.title}
									// card={this.state.card.filter(card => card.colId === column.id)}
									// comments={this.state.comments}
									user={user.name}

									// onColTitleUpdate={this.handleColTitleUpdate}
									// onCardAdd={this.handleCardAdd}
									// onCardDelete={this.handleCardDelete}
									// onCardUpdate={this.handleCardUpdate}
									//
									// onCommentAdd={this.handleCommentAdd}
									// onCommentDelete={this.handleCommentDelete}
									// onCommentUpdate={this.handleCommentUpdate}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
