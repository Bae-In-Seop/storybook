import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
	tags: ['autodocs'],
	component: Button,
	argTypes: {
		minWidth: {
			description: '버튼의 가로 크기',
			control: { type: 'number' },
			table: {
				category: 'Style',
			},
		},

		minHeight: {
			description: '버튼의 세로 크기',
			control: { type: 'number' },
			table: {
				category: 'Style',
			},
		},

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

		borderWidth: {
			description: '버튼의 테두리 크기',
			control: { type: 'number' },
			table: {
				category: 'Style',
			},
		},

		borderColor: {
			description: '버튼의 테두리 색상',
			control: { type: 'color' },
			table: {
				category: 'Style',
			},
		},

		borderRadius: {
			description: '버튼의 테두리 각도',
			control: { type: 'number' },
			table: {
				category: 'Style',
				defaultValue: { summary: '8' },
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
		label: 'Button',
		isLoading: false,
		disabled: false,
	},
};
