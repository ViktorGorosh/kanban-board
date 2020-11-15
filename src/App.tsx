import React from 'react'
import './App.scss'
import AuthPopup from "./app/views/components/AuthPopup/AuthPopup";
import ColumnItem from "./app/views/components/ColumnItem/ColumnItem";
import {useSelector} from 'react-redux'
import {selectUser} from "./app/state/ducks/auth/authSlice";
import {selectColumns} from "./app/state/ducks/column/columnSlice";


export default () => {

	const user = useSelector(selectUser)
	const columns = useSelector(selectColumns)

	return (
		<>
			{user.isAuthorized ? null :
				<AuthPopup />
			}
			<header className='main-header text-center'>
				<h1 className='title'>NotTrelloAtAll</h1>
			</header>
			<section className='section-board'>
				<div className="container-fluid">
					<div className="row">
						{columns.map((column) => {
							return (
								<ColumnItem
									key={column.id}
									column={column}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
