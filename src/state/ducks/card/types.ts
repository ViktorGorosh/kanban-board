export interface Card {
	colId: number,
	id: number,
	title: string,
	description: string | null,
	author: string
}

export interface CardChanges {
	id: Card['id']
	title?: Card['title']
	description?: Card['description']
}

export interface AddCardAction {
	type: string,
	payload: {
		colId: Card['colId'],
		id: Card['id'],
		newTitle: Card['title'],
		author: Card['author']
	}
}

export interface DeleteCardAction {
	type: string,
	payload: Card['id']
}

export interface UpdateCardAction {
	type: string,
	payload: CardChanges
}
