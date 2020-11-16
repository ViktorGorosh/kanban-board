import React, {useCallback, useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteCard, updateCard} from 'state/ducks/card/cardSlice';
import {selectCardComments, addComment} from "state/ducks/comment/commentSlice";
import {selectNextId, incrementNextId} from "state/ducks/nextId/nextIdSlice";
import {selectUser} from "state/ducks/auth/authSlice";
import CommentItem from "views/components/CommentItem/CommentItem";
import {Card} from "state/ducks/card/types";
import './CardOpen.scss'

interface CardOpenProps {
	colTitle: string,
	card: Card,
	onClose: () => void
}

export default ({colTitle, card, onClose}: CardOpenProps) => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const nextId = useSelector(selectNextId)
	const comments = useSelector(state => selectCardComments(state, card.id))

	const [title, setTitle] = useState(card.title)
	const [description, setDescription] = useState(card.description)
	const [isAddingComment, setAddingComment] = useState(false)
	const [newComment, setNewComment] = useState('')

	const onEscape = useCallback((e) => {
		if (e.key === 'Escape') onClose()
	}, [onClose])

	const onTitleChange = useCallback((e) => setTitle(e.target.value), [])

	const onTitleSave = useCallback(() => {

		if (title === '') return

		dispatch(updateCard({id: card.id, title}))
	},[card.id, dispatch, title])

	const onDescriptionChange = useCallback((e) => setDescription(e.target.value), [])

	const onDescriptionDelete = useCallback(() => {
		dispatch(updateCard({id: card.id, description: null}))
	},[card.id, dispatch])

	const onDescriptionSave = useCallback(() => {
		dispatch(updateCard({id: card.id, description}))
	},	[card.id, description, dispatch])

	const onDescriptionAdd = useCallback(() => {
		dispatch(updateCard({id: card.id, description: ''}))
	},	[card.id, dispatch])

	const onCardDelete = useCallback(() => dispatch(deleteCard(card.id)), [dispatch, card.id])

	const onToggleAddingComment = useCallback(() => {
		setAddingComment(prevState => !prevState)
		setNewComment('')
	}, [])

	const onNewCommentChange = useCallback((e) => setNewComment(e.target.value), [])

	const onCommentAdd = useCallback(() => {

		if (newComment === '') return

		setAddingComment(false)
		dispatch(addComment({id: nextId, cardId: card.id, text: newComment, author: user.name}))
		dispatch(incrementNextId())
	}, [card.id, dispatch, newComment, nextId, user.name])

	useEffect(() => {
		document.addEventListener('keydown', onEscape)
		return function cleanup() {
			document.removeEventListener('keydown', onEscape)
		};
	}, [onEscape]);

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
								onClick={onClose}
							>
								<span aria-hidden="true">&times;</span>
							</button>

							<div className="card-header">
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Title:</h5>
									<input type="text"
										   className="form-control input"
										   defaultValue={card.title}
										   autoFocus={true}

										   onChange={onTitleChange}
									/>
									<button
										className='CardOpen__save-title btn btn-info d-block'
										onClick={onTitleSave}
									>Save</button>
								</div>
								<p>In "{colTitle}" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{card.author}</p>
								</div>
							</div>

							<div className="card-body">
								{card.description !== null ?

									<>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={card.description}
											autoFocus={true}

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
									{comments.map(comment => {
										return (
											<CommentItem
												key={comment.id}
												comment={comment}
											/>
										)
									})}
								</ul>

								{isAddingComment ?
									<div className='adding-card'>
										<input
											type="text"
											className="form-control adding-card__input"
											placeholder='Enter comment...'
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
