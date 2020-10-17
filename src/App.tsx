import React, {Component} from 'react';
import './App.scss';
import Card from "./Card/Card";
import AuthPopup from "./AuthPopup/AuthPopup";

interface IState {
	isAuthorized: boolean,
	todoCards: any
}

class App extends Component<{}, any> {

	constructor(props) {
		super(props);
		this.state = {
			currentUser: 'Виктор Горош',
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
					comment: 'Comment 2',
					author: 'Author 2'
				},
				{
					title: 'Title 3',
					description: 'Desc 3',
					comment: 'Comment 3',
					author: 'Author 3'
				},
			]
		}
	}

	render() {
		return (
			<React.Fragment>
				<AuthPopup />
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
										<li className="list-group-item">
											<Card />
										</li>
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
