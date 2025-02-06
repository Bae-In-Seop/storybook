import React, { useState } from 'react';
import './Toggle.module.css';

interface ToggleProps {
	isEnable: boolean;
	size: string;
	backgroundColor: string;
	thumbColor: string;
	onClick: () => void;
}

const Toggle = ({ size = 'medium', isEnable = false, onClick = () => {} }: ToggleProps) => {
	const [enable, setEnable] = useState(isEnable);

	const handleToggle = (event: React.MouseEvent) => {
		setEnable(prev => !prev);
		onClick && onClick();
	};

	return (
		<div className='toggle-switch' onClick={handleToggle}>
			<div className={`toggle-switch-handle ${enable ? 'on' : 'off'}`} />
		</div>
	);
};

export default Toggle;
