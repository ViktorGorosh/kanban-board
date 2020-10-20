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

	componentDidMount() {
		this.newUser = this.state.currentUser
	}

	changeName = (event) => {
		this.newUser = event.target.value
	}

	login = () => {
		if (this.newUser !== '') {
			console.log('You are in as', this.newUser)
			this.setState({
				isAuthorized: true,
				currentUser: this.newUser
			})
		}
	}

	render() {

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