import React, {useCallback, useState} from "react";

interface IProps {
	name: string
	onUserUpdate: (name: string) => void
}

export default (props: IProps) => {

	const [name, setName] = useState(props.name)
	const onChange = useCallback(e => {setName(e.target.value)},[])
	const onClick = useCallback(() => props.onUserUpdate(name), [name, props])

	return (
		<>
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
								   onChange={onChange}
							>{}</input>
						</div>
						<div className="modal-footer justify-content-center">
							<button type="button" className="btn btn-secondary" data-dismiss="modal"
									onClick={onClick}
							>Войти</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}