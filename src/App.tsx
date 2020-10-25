import React, {Component} from 'react'
import './App.scss'
import AuthPopup from "./AuthPopup/AuthPopup";
import Column from "./Columns/Column";

interface IState {
	isAuthorized: boolean,
	user: string,
	columns: Array<string>
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
	author: string,
	text: string,
}

class App extends Component<{}, IState>{

	constructor(props) {
		super(props);
		this.state = {
			isAuthorized: false,
			user: 'Аноним',
			columns: ['TO DO', 'In Progress', 'Testing', 'done'],
			cards: [
				{
					colId: 'TO DO',
					id: 0,
					title: 'Title 1',
					description: null,
					comments: [],
					author: 'Author 1'
				}
			]
		}
	}

	updateUser = (name: string): void => {
		if (name !== '') {
			this.setState((prevState) => ({
				isAuthorized: true,
				user: name
			}))
		}
	}

	updateColTitle = (target: string, newTitle: string): void => {
		if (newTitle === '') return
		this.setState((prevState) => ({
			columns: prevState.columns.map((title) => {
				if(title === target) {
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
				{colId, id: prevState.cards.length, title, description: null, comments: [], author: prevState.user}
			]
		}))
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state)
	}

	render() {

		let columns = this.state.columns.map((column, colIndex) => {
			return (
				<Column
					key={column}
					colIndex={colIndex}
					title={column}
					cards={this.state.cards}
					updateColTitle={this.updateColTitle}
					addCard={this.addCard}
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