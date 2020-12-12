import React from "react";
import Item from "./Item";
import { connect } from "react-redux";

const List = (props) => {
	return (
		<div>
			{props.items.map((item) => (
				<Item key={item.id} data={item} toggle={props.openModal} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.product.products,
});

export default connect(mapStateToProps)(List);
