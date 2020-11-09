export interface Column {
	id: number,
	title: string
}

export interface ChangeTitleAction {
	type: string,
	payload: {
		id: number,
		newTitle: string,
	}
}
