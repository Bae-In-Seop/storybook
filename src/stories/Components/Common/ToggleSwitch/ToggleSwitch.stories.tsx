import type { Meta, StoryObj } from '@storybook/react';

import ToggleSwitch from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
	title: 'Common/ToggleSwitch',
	tags: ['autodocs'],
	component: ToggleSwitch,
	argTypes: {
		size: {
			description: '사이즈',
			control: { type: 'radio' },
		},

		backgroundColor: {
			description: '토글의 배경색',
			control: { type: 'color' },
			table: {
				category: 'Style',
			},
		},

		thumbColor: {
			description: '토글의 핸들러 색상',
			control: { type: 'color' },
			table: {
				category: 'Style',
			},
		},

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
type Story = StoryObj<typeof ToggleSwitch>;

export const Basic: Story = {
	name: 'Toggle',
	parameters: {
		layout: 'centered',
	},
	args: {
		isEnable: true,
		disabled: false,
	},
};
