import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./state/ducks/auth/authSlice";
import columnsReducer from './state/ducks/column/columnSlice';

export default configureStore( {
	reducer: {
		user: userReducer,
		columns: columnsReducer
	}
})
