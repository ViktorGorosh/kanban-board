import React from "react";
import {ICard} from "../App";
import './CardOpen.scss'
import Comment from "../Comment/Comment";

interface IProps {
	colTitle: string
	content: ICard
}

export default (props: IProps) => {
	let comments = props.content.comments.map((comment, comIndex) => {
		return (
			<Comment
				key={comIndex}
				comIndex={comIndex}
				content={comment}
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
							<div className="card-header">
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Title:</h5>
									<input type="text" className="input" defaultValue={props.content.title}/>
								</div>
								<p>In "{props.colTitle}" list</p>
								<div className='d-flex justify-content-between mb-1'>
									<h5 className='CardOpen__annotation'>Author:</h5>
									<p className="author">{props.content.author}</p>
								</div>
							</div>
							<div className="card-body">
								<h5 className='CardOpen__annotation mb-2'>Description:</h5>
								<textarea className="CardOpen__description">{props.content.description}</textarea>
							</div>
							<div className="card-footer">
								<h5 className='CardOpen__annotation mb-2'>Comments:</h5>
								<ul className="list-group">
									{comments}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}