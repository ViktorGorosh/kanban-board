import React from 'react';
import {useSelector} from 'react-redux';
import { selectUser } from "state/ducks/user";
import {selectColumns} from "state/ducks/column";
import AuthPopup from "views/components/AuthPopup/AuthPopup";
import ColumnItem from "views/components/ColumnItem/ColumnItem";
import {User} from "interfaces/user";
import {Column} from "interfaces/column";
import 'App.scss'


export default () => {

	const user: User = useSelector(selectUser)
	const columns: Array<Column> = useSelector(selectColumns)

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
