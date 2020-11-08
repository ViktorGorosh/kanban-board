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
