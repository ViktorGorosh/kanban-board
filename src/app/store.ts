import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./state/ducks/auth/authSlice";

export default configureStore( {
	reducer: {
		user: userReducer
	}
})
