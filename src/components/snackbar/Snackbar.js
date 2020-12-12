import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hideSnackbar } from "../../redux/snackbar/actions";

import "./styles.scss";

const Snackbar = ({ data, hideSnackbar }) => {
	useEffect(() => {
		if (data.show) onHideSnackbar();
	}, [data.show]);

	const onHideSnackbar = () => {
		setTimeout(() => {
			hideSnackbar();
		}, 2500);
	};

	return <div>{data.show && <div className="flash-msg text-center py-2 px-5">{data && data.text}</div>}</div>;
};

const mapStateToProps = (state) => ({
	data: state.snackbar,
});

export default connect(mapStateToProps, { hideSnackbar })(Snackbar);
