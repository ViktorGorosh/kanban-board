import {Card, CardChanges} from "interfaces/card";

export interface AddCardAction {
	type: string,
	payload: {
		colId: Card['colId'],
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
