import React from 'react';
import './Toastify.css';
import styles from './Toast.module.css';

import DoneIcon from './img/done.svg?react';
import ErrorIcon from './img/error.svg?react';

import { toast } from 'react-toastify';

type ToastType = 'error' | 'debug' | 'warn' | 'info' | 'done';

interface ToastProps {
	type?: ToastType;
	title: string;
	description: string;
	closeOnClick?: boolean;
	autoClose?: number;
	onClickToast?: () => void;
}

const drawIcon = (type: ToastType): JSX.Element => {
	switch (type) {
		case 'error':
			return <ErrorIcon />;
		default:
			return <DoneIcon />;
	}
};

const Toast = (
	type: ToastType = 'done',
	title: string,
	description: string,
	closeOnClick: boolean = true,
	autoClose: number = 3000,
	onClickToast: () => void = () => {}
): React.ReactText => {
	const handleOnClick = (closeToast: () => void) => {
		if (closeOnClick) closeToast();
		onClickToast();
	};

	return toast(
		({ closeToast }) => (
			<div className={`${styles.toastContainer} ${styles[type]}`} onClick={() => handleOnClick(closeToast)}>
				<div className={styles.title}>
					<div className={styles.icon}>{drawIcon(type)}</div>
					<div className={styles.text}>{title}</div>
				</div>
				<div className={styles.separator} />
				<div className={styles.description}>{description}</div>
			</div>
		),
		{ autoClose }
	);
};

const ToastError = (
	code: number,
	description: string = '장애가 발생하였습니다.',
	title: string = 'A.Biz',
	closeOnClick: boolean = true,
	autoClose: number = 3000,
	onClickToast: () => void = () => {}
): React.ReactText => {
	const desc = code > 0 ? `${description} (${code})` : description;
	return Toast('error', title, desc, closeOnClick, autoClose, onClickToast);
};

const ToastInfo = (
	description: string,
	title: string = 'A.Biz',
	closeOnClick: boolean = true,
	autoClose: number = 3000,
	onClickToast: () => void = () => {}
): React.ReactText => {
	return Toast('info', title, description, closeOnClick, autoClose, onClickToast);
};

const ToastComponent: React.FC<ToastProps & { closeToast?: () => void }> = ({
	closeToast,
	title = 'A.Biz',
	description,
	type = 'info',
}) => {
	return (
		<>
			<div className={`${styles.toastContainer} ${styles[type]}`}>
				<div className={styles.title}>
					<div className={styles.icon}>{drawIcon(type)}</div>
					<div className={styles.text}>{title}</div>
				</div>
				<div className={styles.separator} />
				<div className={styles.description}>{description}</div>
			</div>
		</>
	);
};

export { Toast, ToastInfo, ToastError, ToastComponent };
