import React, { useEffect, useState } from 'react';
import SearchIcon from './img/search.svg?react';
import CloseIcon from './img/close.svg?react';

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	placeholder?: string;
	hasSearchIcon?: boolean;
	hasClean?: boolean;
	isDynamic?: boolean;
	onEnter?: (value: string) => void;
	width: number;
	height: number;
	borderRadius: number;
	style: object;
	backgroundColor: string;
}

const Input = ({
	value = '',
	onChange,
	disabled = false,
	placeholder = '텍스트를 입력해주세요.',
	hasSearchIcon = true,
	hasClean = true,
	isDynamic = false,
	width = 280,
	height = 40,
	borderRadius = 8,
	onEnter,
	backgroundColor = '#F9FAFB',
	style = {},
}: InputProps) => {
	const [text, setText] = useState(value);

	useEffect(() => {
		setText(value);
	}, [value]);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);

		if (isDynamic) {
			onChange(event.target.value);
		}
	};

	const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			onChange(text);
			onEnter?.(text);
		} else if (event.key === 'Escape') {
			setText('');
			onChange('');
		}
	};

	return (
		<div
			className='container'
			style={{
				width,
				height,
				display: 'flex',
				alignItems: 'center',
				flex: 1,
				border: `1px solid #E1E4E6`,
				backgroundColor,
				borderRadius,
				padding: `0 10px`,
				gap: `8px`,
			}}
		>
			{hasSearchIcon && <SearchIcon stroke='#4D5256' />}
			<input
				type='text'
				placeholder={placeholder}
				disabled={disabled}
				value={text}
				onChange={handleOnChange}
				onKeyDown={handleOnKeyDown}
				style={{
					paddingLeft: 0,
					display: 'flex',
					flex: 1,
					backgroundColor: 'inherit',
					border: 'none',
					minWidth: '0px',
					outline: 'none',
					fontSize: '16px',
					fontWeight: 400,
					lineHeight: '22px',
					boxSizing: 'border-box',
					fontFamily: 'Noto Sans KR',
					...style,
				}}
			/>
			{hasClean && (
				<CloseIcon
					onClick={() => {
						setText('');
						onChange('');
					}}
					style={{ cursor: 'pointer' }}
				/>
			)}
		</div>
	);
};

export default Input;
