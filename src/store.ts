import { configureStore} from "@reduxjs/toolkit";
import userReducer from "state/ducks/user";
import nextIdReducer from 'state/ducks/nextId/nextIdSlice'
import columnsReducer from 'state/ducks/column';
import cardsReducer from 'state/ducks/card'
import commentsReducer from 'state/ducks/comment'

export default configureStore( {
	reducer: {
		user: userReducer,
		nextId: nextIdReducer,
		columns: columnsReducer,
		cards: cardsReducer,
		comments: commentsReducer
	}
})
