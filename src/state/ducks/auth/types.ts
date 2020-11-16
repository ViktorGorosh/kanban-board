export interface AuthState {
	name: string,
	isAuthorized: boolean,
}

export interface LoginAction {
	type: string,
	payload: string
}
