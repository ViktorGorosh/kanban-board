import React from "react";
import {ICard} from "../App";
import './CardOpen.scss'
import Comment from "../Comment/Comment";

interface IProps {
	colTitle: string
	isAddingComment: boolean
	content: ICard

	close: () => void
	escHandler: (event: object) => void
	deleteCard: () => void
	changeCardField: (field: 'title' | 'description', newValue: string | null) => void
	changeComment: (comIndex: number, newValue: string) => void
	openAddCommentMenu: () => void
	changeNewComment: (event: object) => void
	addComment: () => void
}

export default (props: IProps) => {
	let comments = props.content.comments.map((comment, comIndex) => {
		return (
			<Comment
				key={comIndex}
				comIndex={comIndex}
				content={comment}
				changeComment={props.changeComment}
				escHandler={props.escHandler}
			/>
		)
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
								onClick={event => props.close()}
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
										   onKeyDown={props.escHandler}
										   onChange={(event) => props.changeCardField('title', event.target.value)}
									/>
								</div>
								<p>In "{props.colTitle}" list</p>
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
											onClick={() => props.changeCardField('description', '')}
										>Add description</button>
									</div>
								:
									<React.Fragment>
										<h5 className='CardOpen__annotation mb-2'>Description:</h5>
										<textarea
											className="CardOpen__description form-control mb-2"
											defaultValue={props.content.description}
											autoFocus={true}
											onKeyDown={props.escHandler}
											onChange={(event) => props.changeCardField('description', event.target.value)}
										>{}</textarea>
										<button
											className='btn btn-warning d-block ml-auto mb-2'
											onClick={() => props.changeCardField('description', null)}
										>Delete description</button>
									</React.Fragment>
								}
								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group mb-2">
									{comments}
								</ul>

								{props.isAddingComment ?
									<div className='adding-card'>
										<input
											type="text"
											className="form-control adding-card__input"
											placeholder='Введите комментарий'
											autoFocus={true}
											onInput={props.changeNewComment}
										/>
										<button
											type="button"
											className="btn btn-secondary adding-card__button"
											onClick={props.addComment}
										>Добавить</button>
									</div>
								:
									<button
										type="button"
										className="btn btn-warning d-block ml-auto"
										onClick={props.openAddCommentMenu}
									>Добавить комментарий</button>
								}

							</div>
							<div className="card-footer">
								<button className='btn btn-danger' onClick={props.deleteCard}>Delete</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}