import React, { useEffect, useState } from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleProps {
	isEnable?: boolean;
	size?: 'small' | 'medium' | 'large';
	backgroundColor?: string;
	thumbColor?: string;
	onClick?: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
}

const ToggleSwitch = ({
	size = 'medium',
	isEnable = false,
	onClick,
	backgroundColor = '#4caf50',
	thumbColor = '#fff',
	disabled = false,
	style = {},
}: ToggleProps) => {
	const [enable, setEnable] = useState(isEnable);

	const handleToggle = (event: React.MouseEvent) => {
		if (!disabled) {
			setEnable(prev => {
				const value = !prev;
				onClick && onClick(value);
				return value;
			});
		}
	};

	useEffect(() => {
		setEnable(isEnable);
	}, [isEnable]);

	return (
		<div
			className={`${styles.toggleSwitch} ${styles[size]} ${enable ? styles.on : styles.off}`}
			onClick={handleToggle}
			style={{
				backgroundColor: enable ? backgroundColor : undefined,
				...style,
			}}
		>
			<div
				className={`${styles.toggleSwitchHandle} ${styles[size]} ${enable ? styles.on : styles.off}`}
				style={{ backgroundColor: thumbColor }}
			/>
		</div>
	);
};

export default ToggleSwitch;
