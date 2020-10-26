import React, {useEffect, useState} from "react";
import './CardOpen.scss'
import {ICard} from "../../App";
import Comment from "../../Comment/Comment";

interface IProps {
	content: ICard,
	user: string,
	close: () => void
	deleteCard: (id: number) => void
	saveChanges: (id: number, content: ICard) => void
}

export default (props: IProps) => {

	const [state, setState] = useState(props.content)
	const [isAddingDescription, setAddingDescription] = useState(false)
	const [isAddingComment, setAddingComment] = useState(false)
	const [comment, setComment] = useState('')

	// Id последнего комментария всегда наибольший
	const [nextId, setNextId] = useState(state.comments.length === 0 ?
		0 :
		state.comments[state.comments.length - 1].id + 1)

	const update = (field: 'title' | 'description', value: string | null): void => {
		setState(prevState => ({
			...prevState,
			[field]: value
		}))
	}

	const escHandler = (e): void => {
		if (e.key === 'Escape') props.close()
	}

	const addComment = (text: string): void => {
		setState(prevState => ({
			...prevState,
			comments: [...prevState.comments, {author: props.user, text, id: nextId}]
		}))
		setComment('')
		setAddingComment(false)
		setNextId(prevState => prevState + 1)
	}

	const deleteComment = (id: number): void => {
		setState(prevState => ({
			...prevState,
			comments: prevState.comments.filter(comment => comment.id !== id)
		}))
	}

	const comments = state.comments.map((comment, comIndex) => {
		return (
			<Comment
				key={comIndex}
				content={comment}
				escHandler={escHandler}
				deleteComment={deleteComment}
			/>
		)
	})

	useEffect(() => {
		console.log(state)
	})

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
										   defaultValue={state.title}
										   autoFocus={true}

										   onKeyDown={escHandler}
										   onChange={e => update('title', e.target.value)}
									/>
								</div>
								<p>In "{state.colId}" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{state.author}</p>
								</div>
							</div>

							<div className="card-body">
								{state.description !== null ?

									<React.Fragment>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={state.description}
											autoFocus={true}

											onKeyDown={escHandler}
											onChange={(e) => update('description', e.target.value)}
										>{}</textarea>

										<div className='d-flex justify-content-between mb-2'>
											<button
												className='btn btn-danger d-block'
												onClick={() => update('description', null)}
											>Delete description</button>
											<button
												className='btn btn-info d-block'
												onClick={() => props.saveChanges(state.id, state)}
											>Save</button>
										</div>
									</React.Fragment>

									:

									<div className='d-flex justify-content-between mb-2'>
										<h5 className='CardOpen__annotation'>Description:</h5>
										<button
										className='btn btn-warning'
										onClick={() => {
											update('description', '')
										}}
										>Add description</button>
									</div>
								}

								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group mb-2">
									{comments}
								</ul>

								{isAddingComment ?
									<div className='adding-card'>
										<input
											type="text"
											className="form-control adding-card__input"
											placeholder='Введите комментарий'
											autoFocus={true}
											onChange={e => setComment(e.target.value)}
										/>
										<button
											type="button"
											className="btn btn-secondary adding-card__button"
											onClick={() => {
												addComment(comment)
											}}
										>Save</button>
									</div>
								:
									<button
										type="button"
										className="btn btn-warning d-block ml-auto"
										onClick={() => setAddingComment(true)}
									>Add comment</button>
								}

							</div>
							<div className="card-footer d-flex justify-content-between">
								<button
									className='btn btn-danger'
									onClick={() => props.deleteCard(props.content.id)}
								>Delete</button>
								<button
									className='btn btn-info'
									onClick={() => props.saveChanges(state.id, state)}
								>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}