import React from 'react';
import './App.scss';
import Card from "./Card/Card";

function App() {
	return (
		<React.Fragment>
			<header className='main-header text-center'>
				<h1 className='title'>NotTrelloAtAll</h1>
			</header>
			<section className='section-board'>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 column">
							<div className="card">
								<textarea className="form-control">TO DO</textarea>
								<ul className="list-group list-group-flush">
									<li className="list-group-item">Cras justo odio</li>
									<li className="list-group-item">Dapibus ac facilisis in</li>
									<li className="list-group-item">Vestibulum at eros</li>
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

export default App;
