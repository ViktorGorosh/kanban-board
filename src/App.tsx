import React from 'react';
import './App.scss';

function App() {
	return (
		<React.Fragment>
			<header className='main-header text-center'>
				<h1 className='title'>NotTrelloAtAll</h1>
			</header>
			<section className='section-board'>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 column-item">TO DO</div>
						<div className="col-md-3 column-item">In Progress</div>
						<div className="col-md-3 column-item">Testing</div>
						<div className="col-md-3 column-item">Done</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default App;
