import React, {Component} from "react";
import {ICard} from "../App";

interface IProps {
	content: ICard
}

export default (props: IProps) => {
	return <li className="list-group-item">{props.content.title}</li>
}