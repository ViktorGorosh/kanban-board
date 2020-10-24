import React, {Component} from 'react'
import './App.scss'
import AuthPopup from "./AuthPopup/AuthPopup";

interface IState {
	isAuthorized: boolean,
	user: string
}

class App extends Component<{}, IState>{

	constructor(props) {
		super(props);
		this.state = {
			isAuthorized: false,
			user: 'Аноним',
		}
	}

	setUserName = (name: string): void => {
		if (name !== '') {
			this.setState({
				isAuthorized: true,
				user: name
			})
		}
	}

	componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IState>, snapshot?: any) {
		console.log(this.state)
	}

	componentDidMount() {

	}

	render() {

		return (
			<React.Fragment>
				{this.state.isAuthorized ? null :
					<AuthPopup
						name={this.state.user}
						saveName={this.setUserName}
					/>
				}
				<header className='main-header text-center'>
					<h1 className='title'>NotTrelloAtAll</h1>
				</header>
				<section className='section-board'>
					<div className="container-fluid">
						<div className="row">

						</div>
					</div>
				</section>
			</React.Fragment>
		)
	}
}

export default App