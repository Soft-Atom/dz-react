export const AUTH = {
	WRONG_PASSWORD_LENGTH: { message: 'Password must be at least 4 characters.' },
	WRONG_CONFIRM_PASSWORD: {
		message: 'Password is not the same as confirm password'
	},
	WRONG_LOGIN_OR_PASSWORD: { message: 'Incorrect username or password' }
} as const;
