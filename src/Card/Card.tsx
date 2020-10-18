import React from "react";

interface IProps {
	openWide: () => void,
}

export default (props: IProps) => {

	return (
		<span onClick={props.openWide}>Карточка</span>
	)
}