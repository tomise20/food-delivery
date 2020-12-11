import React from "react";
import Item from "./Item";

const List = (props) => {
	return (
		<div>
			<Item toggle={props.openModal} />
			<Item toggle={props.openModal} />
			<Item toggle={props.openModal} />
			<Item toggle={props.openModal} />
		</div>
	);
};

export default List;
