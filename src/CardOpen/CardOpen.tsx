import React from "react";
import {ICard} from "../App";

interface IProps {
	content: ICard
}

export default (props) => {
	return (
		<React.Fragment>
			<div className="modal fade show" id="staticBackdropLive" data-backdrop="static" data-keyboard="false"
				 role="dialog" aria-labelledby="staticBackdropLiveLabel"
				 style={{display: 'block'}} aria-modal="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4>{props.content.title}</h4>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}