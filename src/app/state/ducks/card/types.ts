export interface Card {
	colId: number,
	id: number,
	title: string,
	description: string | null,
	author: string
}

export interface CardChanges {
	title?: Card['title']
	description?: Card['description']
}

export interface AddCardAction {
	type: string,
	payload: {
		colId: number,
		id: number,
		newTitle: string,
		author: string
	}
}

export interface DeleteCardAction {
	type: string,
	payload: number
}
