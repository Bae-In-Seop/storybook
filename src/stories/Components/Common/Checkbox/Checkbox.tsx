import React, { useEffect, useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
	label?: string;
	checked: boolean;
	disabled: boolean;
	onChange?: (checked) => void;
	style?: React.CSSProperties;
	useCustomIcon: boolean;
	enableIcon?: React.ReactNode;
	disableIcon?: React.ReactNode;
}

const Checkbox = ({
	label = '',
	checked = false,
	disabled = false,
	onChange = () => {},
	style = {},
	useCustomIcon = true,
	enableIcon = null,
	disableIcon = null,
}: CheckboxProps) => {
	const [isCheck, setIsCheck] = useState(checked);

	useEffect(() => {
		setIsCheck(checked);
	}, [checked]);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!disabled) {
			setIsCheck(!isCheck);
			onChange(!isCheck);
		}
	};

	return (
		<label onClick={handleOnChange} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
			{useCustomIcon ?
				<span style={{ cursor: 'pointer', display: 'flex', ...style, opacity: disabled ? 0.3 : 1 }}>
					{isCheck ? enableIcon : disableIcon}
				</span>
			:	<input type='checkbox' checked={isCheck} style={style} disabled={disabled} />}
			{label}
		</label>
	);
};

export default Checkbox;
