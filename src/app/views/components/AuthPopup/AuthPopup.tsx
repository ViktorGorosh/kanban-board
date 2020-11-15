import React, {useCallback, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { selectUser, login } from '../../../state/ducks/auth/authSlice'

export default () => {

	const dispatch = useDispatch();
	const user = useSelector(selectUser)

	const [newName, setNewName] = useState(user.name)
	const onChange = useCallback(e => {setNewName(e.target.value)},[])
	const onClick = useCallback(() => {

		if (newName === '') return

		dispatch(login(newName))
	}, [dispatch, newName])

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
								   defaultValue={user.name}
								   autoFocus={true}
								   onChange={onChange}
							/>
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
