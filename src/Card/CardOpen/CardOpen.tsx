import React from "react";
import './CardOpen.scss'
import {ICard} from "../../App";

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
							<button
								type="button"
								className="close"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>

							<div className="card-header">
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Title:</h5>
									<input type="text"
										   className="form-control input"
										   defaultValue={props.content.title}
										   autoFocus={true}
									/>
								</div>
								<p>In "" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{props.content.author}</p>
								</div>
							</div>

							<div className="card-body">
								{props.content.description === null ?
									<div className='d-flex justify-content-between mb-2'>
										<h5 className='CardOpen__annotation'>Description:</h5>
										<button
											className='btn btn-secondary'
										>Add description</button>
									</div>
									:
									<React.Fragment>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={props.content.description}
											autoFocus={true}
										>{}</textarea>
										<button
											className='btn btn-warning d-block ml-auto mb-2'
										>Delete description</button>
									</React.Fragment>
								}
								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group mb-2">
								</ul>

							</div>
							<div className="card-footer">
								<button className='btn btn-danger'>Delete</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}