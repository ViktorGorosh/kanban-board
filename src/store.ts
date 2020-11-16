import { configureStore} from "@reduxjs/toolkit";
import userReducer from "state/ducks/auth/authSlice";
import nextIdReducer from 'state/ducks/nextId/nextIdSlice'
import columnsReducer from 'state/ducks/column/columnSlice';
import cardsReducer from 'state/ducks/card/cardSlice'
import commentsReducer from 'state/ducks/comment/commentSlice'

export default configureStore( {
	reducer: {
		user: userReducer,
		nextId: nextIdReducer,
		columns: columnsReducer,
		cards: cardsReducer,
		comments: commentsReducer
	}
})
