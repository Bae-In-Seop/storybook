import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

const meta: Meta<typeof Checkbox> = {
	title: 'Common/Checkbox',
	tags: ['autodocs'],
	component: Checkbox,
	argTypes: {
		enableIcon: { table: { disable: true } },
		disableIcon: { table: { disable: true } },
		style: {
			description: '기타 스타일 추가 지정',
			control: { type: 'object' },
			table: {
				category: 'Style',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
	name: 'Checkbox',
	parameters: {
		layout: 'centered',
	},
	args: {
		enableIcon: <MdCheckBox size={20} />,
		disableIcon: <MdCheckBoxOutlineBlank size={20} />,
		label: 'Check',
	},
};
