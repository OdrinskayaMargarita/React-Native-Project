export default {
	auth: {
		registration: {
			signIn: 'Sign in',
			successMessage: '',
			errorMessage: 'Invalid email address or password',
		},
		login: {
			logIn: 'Login Screen',
			button: 'Login',
			successMessage: '',
			form: {
				login: {
					label: 'Email or phone number',
					validation: {
						required: 'Login is required',
						email: 'Login must be valid email',
					},
				},
				password: {
					label: 'Password',
					validation: {
						required: 'Password is required',
						min: 'Username must be at least 6 characters',
						max: 'Username must not exceed 20 characters',
					},
				},
			},
		},
		logout: {
			button: 'Logout',
		},
	},
};
