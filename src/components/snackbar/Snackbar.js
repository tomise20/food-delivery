import React, { useEffect, useState } from "react";

import "./styles.scss";

const Snackbar = (props) => {
	const [show, setShow] = useState(true);

	useEffect(() => {}, []);

	return <div>{show && <div className="flash-msg text-center py-2 px-5">Done!</div>}</div>;
};

export default Snackbar;
