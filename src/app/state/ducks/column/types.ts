export interface Column {
	id: number,
	title: string
}

export interface ChangeTitleAction {
	type: string,
	payload: {
		id: Column["id"],
		newTitle: Column['title'],
	}
}
