import React from "react";
import css from "./Button.module.css";

const Button = ({ title, variant, ...props }) => {
	return (
		<button
			{...props}
			className={`${css.wrapper}
    ${variant === "secondary" ? css.secondary : ""}
    ${variant === "disapled" ? css.disapled : ""}
    `}>
			{title}
		</button>
	);
};

export default Button;
