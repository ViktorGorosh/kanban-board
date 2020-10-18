import React from "react";

interface IAuthPopupProps {
	currentUser: string,
	onChangeName: (event: object) => void,
}

export default (props: IAuthPopupProps) => {
	return (
		<React.Fragment>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
				Запустить окно авторизации
			</button>
			<div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex={-1}
				 role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">Введите имя пользователя</h5>
						</div>
						<div className="modal-body">
							<input type='text' className="form-control"
								   defaultValue={props.currentUser}
								   onChange={props.onChangeName}>
							</input>
						</div>
						<div className="modal-footer justify-content-center">
							<button type="submit" className="btn btn-secondary" data-dismiss="modal"
							>Войти</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}