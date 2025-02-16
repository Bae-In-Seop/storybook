import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Modal> = {
	title: 'Feature/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		title: {
			description: '모달의 제목',
			control: { type: 'text' },
			table: { category: 'Props' },
		},
		description: {
			description: '모달의 내용',
			control: { type: 'text' },
			table: { category: 'Props' },
		},
		confirmText: {
			description: '확인 버튼 텍스트',
			control: { type: 'text' },
			table: { category: 'Props' },
		},
		cancelText: {
			description: '취소 버튼 텍스트',
			control: { type: 'text' },
			table: { category: 'Props' },
		},
		onConfirm: {
			description: '확인 버튼 클릭 시 호출되는 콜백 함수',
			action: 'confirmed',
			table: { category: 'Events' },
		},
		onCancel: {
			description: '취소 버튼 클릭 시 호출되는 콜백 함수',
			action: 'canceled',
			table: { category: 'Events' },
		},
		isOpen: {
			description: '모달을 열지 여부',
			control: { type: 'boolean' },
			table: { category: 'Props' },
		},
		customButtons: {
			description: '사용자 정의 버튼 렌더링',
			control: false,
			table: { category: 'Props' },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

// 기본 모달 (버튼을 클릭하면 열림)
export const Basic: Story = {
	name: '기본 모달',
	parameters: {
		layout: 'centered',
	},
	args: {
		title: 'Title',
		description: 'Description',
		confirmText: 'Confirm',
		cancelText: 'Cancel',
	},

	render: () => {
		const [open, setOpen] = useState(false);

		return (
			<>
				<Button variant='contained' onClick={() => setOpen(true)}>
					Modal
				</Button>
				<Modal
					isOpen={open}
					title='Title'
					description='Description'
					confirmText='Confirm'
					cancelText='Cancel'
					onConfirm={() => setOpen(false)}
					onCancel={() => setOpen(false)}
				/>
			</>
		);
	},
};

// 사용자 정의 버튼 모달
export const WithCustomButtons: Story = {
	name: '사용자 정의 버튼',
	parameters: {
		layout: 'centered',
	},
	render: () => {
		const [open, setOpen] = useState(false);

		useEffect(() => {
			console.log('open : ', open);
		}, [open]);

		return (
			<>
				<Modal
					isOpen={open}
					title='커스텀 버튼 모달'
					description='아래 버튼을 사용자 정의할 수 있습니다.'
					onCancel={() => setOpen(false)}
					customButtons={
						<>
							<Button
								sx={{ background: 'gray', color: 'white', marginRight: '8px' }}
								onClick={() => setOpen(false)}
							>
								닫기
							</Button>
							<Button
								sx={{ background: 'green', color: 'white' }}
								onClick={() => alert('Button Clicked')}
							>
								확인
							</Button>
						</>
					}
				>
					<Button variant='contained' color='grey'>
						사용자 정의 버튼
					</Button>
				</Modal>
			</>
		);
	},
};
