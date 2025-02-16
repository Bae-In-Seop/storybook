import type { Preview } from '@storybook/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<>
				<ToastContainer autoClose={false} closeButton={false} hideProgressBar={true} position='bottom-right' />
				<Story />
			</>
		),
	],
};

export default preview;
