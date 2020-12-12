import React from "react";

const Button = (props) => {
	return (
		<button
			type="button"
			onClick={() => props.onclick()}
			className={`${props.classes} ${props.block ? "btn-block" : ""} ${props.small ? "btn-sm" : ""}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
