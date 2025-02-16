import React, { useEffect, ReactNode, ReactElement } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

interface ModalConfirmProps {
	title?: string;
	description?: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	children?: ReactElement;
	isOpen?: boolean;
	customButtons?: ReactNode;
}

const Modal: React.FC<ModalConfirmProps> = ({
	title = '',
	description = '',
	confirmText = '확인',
	cancelText = '취소',
	onConfirm,
	onCancel,
	children,
	isOpen = false,
	customButtons = null,
}) => {
	const [open, setOpen] = React.useState<boolean>(false);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleOpen = (e: React.MouseEvent) => {
		e.stopPropagation();
		setOpen(true);
	};

	const handleCancel = (event: React.MouseEvent) => {
		event.stopPropagation();
		if (onCancel) onCancel();
		setOpen(false);
	};

	const handleConfirm = (event: React.MouseEvent) => {
		event.stopPropagation();
		if (onConfirm) onConfirm();
		setOpen(false);
	};

	return (
		<>
			{children && React.cloneElement(children, { onClick: handleOpen })}

			<Dialog open={open} onClose={handleCancel} maxWidth='sm'>
				<DialogContent sx={{ padding: '24px 24px' }}>
					<DialogTitle
						sx={{
							width: '100%',
							fontSize: '20px',
							fontWeight: 600,
							textAlign: 'center',
							color: 'var(--Dark-grey700, #292A2B)',
							paddingBottom: '4px',
							fontFamily: 'Noto Sans KR',
							borderRadius: '50%',
							padding: '0 !important',
						}}
					>
						{title}
					</DialogTitle>
					<DialogContentText
						sx={{
							fontSize: '14px',
							fontWeight: 400,
							textAlign: 'center',
							color: 'var(--Dark-grey400, #878D91)',
							marginLeft: '32px',
							marginRight: '32px',
							marginBottom: '16px',
							fontFamily: 'Noto Sans KR',
						}}
					>
						{description}
					</DialogContentText>
					<DialogActions sx={{ justifyContent: 'center' }}>
						{customButtons ?
							customButtons
						:	<>
								<Button
									sx={{
										background: '#E1E4E6',
										color: '#4D5256',
										width: '132px',
										height: '48px',
										fontFamily: 'Noto Sans KR',
										fontSize: 18,
										fontWeight: 500,
									}}
									onClick={handleCancel}
								>
									{cancelText}
								</Button>
								<Button
									sx={{
										background: 'var(--Blue-primary700, #1C6EFF)',
										color: 'white',
										width: '132px',
										height: '48px',
										fontFamily: 'Noto Sans KR',
										fontSize: 18,
										fontWeight: 500,
									}}
									onClick={handleConfirm}
								>
									{confirmText}
								</Button>
							</>
						}
					</DialogActions>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default Modal;
