export interface Column {
	id: number,
	title: string
}

export interface changeTitleAction {
	type: string,
	payload: {
		id: number,
		newTitle: string,
	}
}
