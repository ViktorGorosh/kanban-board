import React, {useState} from "react";
import './CardOpen.scss'
import {ICard} from "../../App";

interface IProps {
	content: ICard,
	close: () => void
	deleteCard: (id: number) => void
	saveChanges: (id: number, content: ICard) => void
}

export default (props: IProps) => {

	const [content, setContent] = useState(props.content)

	const update = (field: 'title' | 'description', value: string | null): void => {
		setContent(prevState => ({
			...prevState,
			[field]: value
		}))
	}

	const escHandler = (e) => {
		if (e.key === 'Escape') props.close()
	}

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
								onClick={props.close}
							>
								<span aria-hidden="true">&times;</span>
							</button>

							<div className="card-header">
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Title:</h5>
									<input type="text"
										   className="form-control input"
										   defaultValue={content.title}
										   autoFocus={true}

										   onKeyDown={escHandler}
										   onChange={e => update('title', e.target.value)}
									/>
								</div>
								<p>In "{content.colId}" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{content.author}</p>
								</div>
							</div>

							<div className="card-body">
								{content.description === null ?
									<div className='d-flex justify-content-between mb-2'>
										<h5 className='CardOpen__annotation'>Description:</h5>
										<button
											className='btn btn-secondary'
											onClick={e => update('description', '')}
										>Add description</button>
									</div>
									:
									<React.Fragment>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={content.description}
											autoFocus={true}

											onKeyDown={escHandler}
											onChange={e => update('description', e.target.value)}
										>{}</textarea>
										<button
											className='btn btn-warning d-block ml-auto mb-2'
											onClick={() => update('description', null)}
										>Delete description</button>
									</React.Fragment>
								}
								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group mb-2">
								</ul>

							</div>
							<div className="card-footer d-flex justify-content-between">
								<button
									className='btn btn-danger'
									onClick={() => props.deleteCard(props.content.id)}
								>Delete</button>
								<button
									className='btn btn-info'
									onClick={() => props.saveChanges(content.id, content)}
								>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}