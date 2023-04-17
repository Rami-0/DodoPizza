import React from "react";
import css from "./Button.module.css";
import { useState } from "react";

const Button = ({ title, variant, amount, ...props }) => {
	const [isHover, setHover] = useState(false);
	const handleMouse = () => {
		setHover(!isHover);
	};

	return (
		<button
			onMouseEnter={amount ? handleMouse : null}
			onMouseLeave={amount ? handleMouse : null}
			datatype={variant}
			{...props}
			className={`${css.wrapper}
    `}>
			{amount ? (
				<>
					<p>{title}</p>
					<hr />
					<p className={css.amount} datatype={isHover ? "hover" : null}>{amount}</p>
					<div className={css.arrow} datatype={isHover ? "hover" : null} >
						<svg
							width="13"
							height="11"
							viewBox="0 0 13 11"
							fill="none"
							class="xlo7eb-9 ijMcBz">
							<path
								d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10"
								stroke="#fff"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"></path>
						</svg>
					</div>
				</>
			) : (
				title
			)}
		</button>
	);
};

export default Button;
