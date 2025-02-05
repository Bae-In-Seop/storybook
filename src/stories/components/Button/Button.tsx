import React, { useEffect, useState } from 'react';

interface ButtonProps {
	label?: string;
	color: string;
	backgroundColor: string;
	borderColor: string;
	borderRadius: string | number;

	isLoading?: boolean;
	disabled?: boolean;

	onClick?: () => void;
	style?: React.CSSProperties;
}

const Button = ({
	label = 'text',
	color,
	backgroundColor,
	isLoading = false,
	disabled = false,
	onClick = () => {},
	style = {},
}: ButtonProps) => {
	return (
		<button
			style={{
				padding: '10px 16px',
				borderRadius: 8,
				border: `1.5px solid #000`,
				fontSize: '16px',
				cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
				opacity: disabled ? 0.6 : 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxSizing: 'border-box',
				backgroundColor,
				color,
				...style,
			}}
			onClick={disabled || isLoading ? undefined : onClick}
			disabled={disabled}
		>
			{isLoading ?
				<span className='loader'></span>
			:	label}
		</button>
	);
};

export default Button;
