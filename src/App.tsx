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
	colId: string
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
			this.setState({
				isAuthorized: true,
				user: name
			})
		}
	}

	// TODO реализовать изменение colTitle для card
	updateColTitle = (target: string, newTitle: string): void => {
		if (newTitle === '') return
		this.setState((prevState) => ({
			columns: prevState.columns.map((title) => {
				if(title === target) {
					return newTitle
				}
				return title
			})
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
					updateColTitle={this.updateColTitle}
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