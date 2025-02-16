import type { Meta, StoryObj } from '@storybook/react';
import RadioGroup from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
	title: 'Common/RadioGroup',
	tags: ['autodocs'],
	component: RadioGroup,
	argTypes: {
		options: {
			description: '라디오 버튼 옵션들',
			control: { type: 'array' },
			table: {
				category: 'Props',
			},
		},
		name: {
			description: '라디오 버튼 그룹의 이름',
			control: { type: 'text' },
			table: {
				category: 'Props',
			},
		},
		onChange: {
			description: '선택한 값 변경 시 호출되는 콜백 함수',
			action: 'changed',
			table: {
				category: 'Events',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
	name: 'RadioGroup',
	parameters: {
		layout: 'centered',
	},
	args: {
		options: [
			{ label: 'Option 1', value: 'option1' },
			{ label: 'Option 2', value: 'option2' },
			{ label: 'Option 3', value: 'option3' },
		],
		name: 'radio-group',
	},
};

// export const WithOnChange: Story = {
// 	name: 'RadioGroup with onChange',
// 	parameters: {
// 		layout: 'centered',
// 	},
// 	args: {
// 		options: [
// 			{ label: 'Option 1', value: 'option1' },
// 			{ label: 'Option 2', value: 'option2' },
// 			{ label: 'Option 3', value: 'option3' },
// 		],
// 		name: 'radio-group',
// 		onChange: (value: string) => {
// 			console.log(`Selected value: ${value}`);
// 		},
// 	},
// };
