import React from "react";

const Button = (props) => {
	return (
		<button
			disabled={props.disabled}
			type={props.type ? props.tpye : "button"}
			onClick={props.onclick ? () => props.onclick() : null}
			className={`${props.classes} ${props.block ? "btn-block" : ""} ${props.small ? "btn-sm" : ""}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
