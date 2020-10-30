import React, {useCallback, useState} from "react";

interface AuthPopupProps {
	name: string
	onUserUpdate: (name: string) => void
}

export default ({name, onUserUpdate}: AuthPopupProps) => {

	const [newName, setNewName] = useState(name)
	const onChange = useCallback(e => {setNewName(e.target.value)},[])
	const onClick = useCallback(() => onUserUpdate(newName), [newName, onUserUpdate])

	return (
		<>
			<div className="modal fade show" id="authPopup" data-backdrop="static" data-keyboard="false" tabIndex={-1}
				 role="dialog" aria-labelledby="staticBackdropLabel" aria-modal="true" style={{display: 'block'}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="staticBackdropLabel">Enter user name</h5>
						</div>
						<div className="modal-body">
							<input type='text'
								   className="form-control"
								   defaultValue={newName}
								   autoFocus={true}
								   onChange={onChange}
							>{}</input>
						</div>
						<div className="modal-footer justify-content-center">
							<button type="button" className="btn btn-secondary" data-dismiss="modal"
									onClick={onClick}
							>Log in</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}