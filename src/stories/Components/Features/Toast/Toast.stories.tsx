import React, { useState } from 'react';
import { Toast, ToastError, ToastInfo } from './Toast'; // Toast 컴포넌트 임포트
import { Button } from '@mui/material';

export default {
	tags: ['autodocs'],
	title: 'Feature/Toast',
	component: Toast,
};

export const DefaultToast = () => {
	const [toastKey, setToastKey] = useState<React.ReactText | null>(null);

	const showErrorToast = () => {
		setToastKey(ToastError(500, 'Server error occurred', 'Error'));
	};

	const showInfoToast = () => {
		setToastKey(ToastInfo('This is Done Message'));
	};

	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<Button variant='contained' color='success' onClick={showInfoToast}>
				Done
			</Button>
			<Button variant='outlined' color='error' onClick={showErrorToast}>
				Error
			</Button>
		</div>
	);
};
