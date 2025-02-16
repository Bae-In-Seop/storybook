import React, { useState } from 'react';

interface RadioButtonProps {
	label: string;
	value: string;
	checked: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange }) => {
	return (
		<label style={{ display: 'block', cursor: 'pointer', marginBottom: '8px' }}>
			<input type='radio' value={value} checked={checked} onChange={onChange} style={{ marginRight: '8px' }} />
			{label}
		</label>
	);
};

interface RadioGroupProps {
	options: { label: string; value: string }[];
	name: string;
	onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, onChange }) => {
	const [selectedValue, setSelectedValue] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
		if (onChange) {
			onChange(event.target.value);
		}
	};

	return (
		<div>
			{options.map(option => (
				<RadioButton
					key={option.value}
					label={option.label}
					value={option.value}
					checked={selectedValue === option.value}
					onChange={handleChange}
				/>
			))}
		</div>
	);
};

export default RadioGroup;
