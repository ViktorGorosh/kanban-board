import React, {useState} from "react";

interface IProps {
	name: string
	saveName: (name: string) => void
}

export default (props: IProps) => {

	const [name, setName] = useState(props.name)

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
							<input type='text'
								   className="form-control"
								   defaultValue={name}
								   autoFocus={true}
								   onChange={e => {setName(e.target.value)}}
							>{}</input>
						</div>
						<div className="modal-footer justify-content-center">
							<button type="button" className="btn btn-secondary" data-dismiss="modal"
									onClick={() => props.saveName(name)}
							>Войти</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}