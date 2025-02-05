import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	tags: ['autodocs'],
	component: Button,
	argTypes: {
		backgroundColor: {
			description: '버튼의 배경색 설정',
			control: { type: 'color' },
			table: {
				category: 'Style',
			},
		},
		color: {
			description: '버튼의 텍스트색 설정',
			control: { type: 'color' },
			table: {
				category: 'Style',
			},
		},

		style: {
			description: '기타 스타일 추가 지정',
			control: { type: 'object' }, // 스타일을 object 형태로 받기
			table: {
				category: 'Style',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
	name: 'Button',
	parameters: {
		layout: 'centered',
	},
	args: {
		label: 'Text',
		color: '#000',
		backgroundColor: '#fff',
		isLoading: false,
		disabled: false,
	},
};
