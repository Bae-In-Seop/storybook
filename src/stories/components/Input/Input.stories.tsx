import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
	tags: ['autodocs'],
	component: Input,
	argTypes: {
		hasSearchIcon: {
			description: '아이콘 포함 유무',
			control: { type: 'boolean' },
		},

		width: {
			description: '입력창 가로 크기',
			control: { type: 'number' },
			table: {
				category: 'Style',
			},
		},

		height: {
			description: '입력창 세로 크기',
			control: { type: 'number' },
			table: {
				category: 'Style',
			},
		},

		borderRadius: {
			description: '입력창 테두리 각도',
			control: { type: 'number' },
			table: { category: 'Style' },
		},

		backgroundColor: {
			description: '입력창 배경색',
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
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
	name: 'Input',
	parameters: {
		layout: 'centered',
	},
	args: {},
};
