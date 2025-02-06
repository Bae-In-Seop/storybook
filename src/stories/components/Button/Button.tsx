import React, { useEffect, useState } from 'react';
import './Button.module.css';

interface ButtonProps {
	label?: string;
	color: string;
	minWidth: number;
	minHeight: number;
	backgroundColor: string;
	borderColor: string;
	borderRadius: number;
	borderWidth: number;

	isLoading?: boolean;
	disabled?: boolean;

	onClick?: () => void;
	style?: React.CSSProperties;
}

const Button = ({
	label = 'text',
	color = '#000',
	minWidth = 0,
	minHeight = 0,
	backgroundColor = '#fff',
	borderColor = '#000',
	borderRadius = 8,
	borderWidth = 1,
	isLoading = false,
	disabled = false,
	onClick = () => {},
	style = {},
}: ButtonProps) => {
	return (
		<button
			style={{
				minWidth,
				minHeight,
				borderRadius,
				borderWidth,
				borderColor,
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
