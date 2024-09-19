import toast, { ToastOptions } from 'react-hot-toast'

export default class AlertUtils {
	static error(message: string, position?: ToastOptions['position']) {
		toast.error(message, { position: position || 'bottom-center' })
	}

	static success(message: string, position?: ToastOptions['position']) {
		toast.success(message, { position: position || 'bottom-center' })
	}

	static warning(message: string, position?: ToastOptions['position']) {
		toast(message, {
			position: position || 'bottom-center',
			icon: '😟',
			style: {
				border: '1px solid #2383ff',
				padding: '14px',
				marginBottom: '25px',
				boxShadow: '2px 3px 2px #2383ff',
				color: '#713200'
			},
			iconTheme: {
				primary: '#713200',
				secondary: '#FFFAEE'
			}
		})
	}
}
