import React, {useCallback, useState} from "react";
import './CardOpen.scss'
import {ICard, IComment} from "../../App";
import Comment from "../../Comment/Comment";

interface IProps {
	colTitle: string,
	card: ICard,
	comments: Array<IComment>
	user: string,
	onClose: () => void

	onCardDelete: (id: number) => void
	onCardUpdate: (id: number, key: 'title' | 'description', value: string | null) => void

	onCommentAdd: (text: string, cardId: number) => void
	onCommentDelete: (id: number) => void
	onCommentUpdate: (id: number, text: string) => void
}

export default (props: IProps) => {

	const [title, setTitle] = useState(props.card.title)
	const [description, setDescription] = useState(props.card.description)
	const [isAddingComment, setAddingComment] = useState(false)
	const [newComment, setNewComment] = useState('')

	const onEscape = useCallback((e) => {
		if (e.key === 'Escape') props.onClose()
	}, [props])
	
	const onTitleChange = useCallback((e) => setTitle(e.target.value), [])
	const onTitleSave = useCallback(() => props.onCardUpdate(props.card.id, 'title', title), [title, props])

	const onDescriptionChange = useCallback((e) => setDescription(e.target.value), [])
	const onDescriptionDelete = useCallback(() => props.onCardUpdate(props.card.id, 'description', null), [props])
	const onDescriptionSave = useCallback(() => props.onCardUpdate(props.card.id, 'description', description), [description, props])
	const onDescriptionAdd = useCallback(() => props.onCardUpdate(props.card.id, 'description', ''), [props])

	const onCardDelete = useCallback(() => props.onCardDelete(props.card.id), [props])

	const onToggleAddingComment = useCallback(() => setAddingComment(prevState => !prevState), [])
	const onNewCommentChange = useCallback((e) => setNewComment(e.target.value), [])
	const onCommentAdd = useCallback(() => {
		props.onCommentAdd(newComment, props.card.id);
		onToggleAddingComment()
	}, [props, newComment, onToggleAddingComment])

	return (
		<>
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
								onClick={props.onClose}
							>
								<span aria-hidden="true">&times;</span>
							</button>

							<div className="card-header">
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Title:</h5>
									<input type="text"
										   className="form-control input"
										   defaultValue={props.card.title}
										   autoFocus={true}
										   
										   onKeyDown={onEscape}
										   onChange={onTitleChange}
									/>
									<button
										className='CardOpen__save-title btn btn-info d-block'
										onClick={onTitleSave}
									>Save</button>
								</div>
								<p>In "{props.colTitle}" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{props.card.author}</p>
								</div>
							</div>

							<div className="card-body">
								{props.card.description !== null ?

									<>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={props.card.description}
											autoFocus={true}

											onKeyDown={onEscape}
											onChange={onDescriptionChange}
										/>

										<div className='d-flex justify-content-between mb-2'>
											<button
												className='btn btn-danger d-block'
												onClick={onDescriptionDelete}
											>Delete description</button>
											<button
												className='btn btn-info d-block'
												onClick={onDescriptionSave}
											>Save</button>
										</div>
									</>

									:

									<div className='d-flex justify-content-between mb-2'>
										<h5 className='CardOpen__annotation'>Description:</h5>
										<button
										className='btn btn-warning'
										onClick={onDescriptionAdd}
										>Add description</button>
									</div>
								}

								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group mb-2">
									{props.comments.map(comment => {
										return (
											<Comment
												key={comment.id}
												comment={comment}
												onEscape={onEscape}
												onCommentDelete={props.onCommentDelete}
												onCommentUpdate={props.onCommentUpdate}
											/>
										)
									})}
								</ul>

								{isAddingComment ?
									<div className='adding-card'>
										<input
											type="text"
											className="form-control adding-card__input"
											placeholder='Введите комментарий'
											autoFocus={true}
											onChange={onNewCommentChange}
										/>
										<button
											type="button"
											className="btn btn-secondary adding-card__button"
											onClick={onCommentAdd}
										>Save</button>
									</div>
								:
									<button
										type="button"
										className="btn btn-warning d-block ml-auto"
										onClick={onToggleAddingComment}
									>Add comment</button>
								}

							</div>
							<div className="card-footer d-flex justify-content-between">
								<button
									className='btn btn-danger'
									onClick={onCardDelete}
								>Delete card</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}