import React from "react";
import {ICard} from "../App";
import './CardOpen.scss'

interface IProps {
	content: ICard
}

export default (props: IProps) => {
	return (
		<React.Fragment>
			<div className="modal fade show" id="staticBackdropLive" data-backdrop="static" data-keyboard="false"
				 role="dialog" aria-labelledby="staticBackdropLiveLabel"
				 style={{display: 'block'}} aria-modal="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="card CardOpen">
							<div className="card-header">
								<h5 className='CardOpen__annotation'>Title:</h5>
								<input type="text" className="CardOpen__title" defaultValue={props.content.title}/>
							</div>
							<div className="card-body">
								<h5 className='CardOpen__annotation'>Description:</h5>
								<textarea className="CardOpen__description">{props.content.description}</textarea>
							</div>
							<div className="card-footer">
								<h5 className='CardOpen__annotation'>Comments:</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}