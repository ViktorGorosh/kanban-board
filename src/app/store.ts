import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./state/ducks/auth/authSlice";
import columnsReducer from './state/ducks/column/columnSlice';
import cardsReducer from './state/ducks/card/cardSlice'

export default configureStore( {
	reducer: {
		user: userReducer,
		columns: columnsReducer,
		cards: cardsReducer
	}
})
