import React from "react";

interface IProps {
	currentUser: string,
	changeName: (event: object) => void,
	login: () => void,
}

export default (props: IProps) => {

	return (
		<React.Fragment>
			<div className="modal fade show" id="authPopup" data-backdrop="static" data-keyboard="false" tabIndex={-1}
				 role="dialog" aria-labelledby="staticBackdropLabel" aria-modal="true" style={{display: 'block'}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">Введите имя пользователя</h5>
						</div>
						<div className="modal-body">
							<input type='text' className="form-control"
								   defaultValue={props.currentUser}
								   autoFocus={true}
								   onChange={props.changeName}>
							</input>
						</div>
						<div className="modal-footer justify-content-center">
							<button type="button" className="btn btn-secondary" data-dismiss="modal"
							onClick={props.login}>Войти</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}