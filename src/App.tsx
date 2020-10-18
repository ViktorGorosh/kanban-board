import React, {Component} from 'react';
import './App.scss';
import Card from "./Card/Card";
import AuthPopup from "./AuthPopup/AuthPopup";

interface IState {
	isAuthorized: boolean,
	currentUser: string,
	activeCard: object | null,
	todoCards: Array<ICard>
}

interface ICard {
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
			activeCard: null,
			todoCards: [
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
				{
					title: 'Title 2',
					description: 'Desc 2',
					comments: [
						{
							author: 'Author of comment 1',
							text: 'Text of comment 1'
						},
					],
					author: 'Author 2'
				},
				{
					title: 'Title 3',
					description: 'Desc 3',
					comments: [
						{
							author: 'Author of comment 1',
							text: 'Text of comment 1'
						},
					],
					author: 'Author 3'
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

	componentDidMount() {
		console.log(this.state)
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state)
	}

	render() {
		let cards
		cards = this.state.todoCards.map((card, cardIndex) => {
			return (
				<li className="list-group-item">
					<span>{card.title}</span>
				</li>
			)
		})
		return (
			<React.Fragment>
				<AuthPopup
					currentUser={this.state.currentUser}
					onChangeName={this.onChangeName.bind(this)}
					onLogin={this.login.bind(this)}
				/>
				<header className='main-header text-center'>
					<h1 className='title'>NotTrelloAtAll</h1>
				</header>
				<section className='section-board'>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3 column">
								<div className="card">
									<textarea className="form-control" defaultValue={'TO DO'}></textarea>
									<ul className="list-group list-group-flush">
										{cards}
									</ul>
									<button type="button" className="btn btn-primary add-card">Добавить карточку</button>
								</div>
							</div>
							{/*<div className="col-md-3 column-item">In Progress</div>*/}
							{/*<div className="col-md-3 column-item">Testing</div>*/}
							{/*<div className="col-md-3 column-item">Done</div>*/}
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default App;