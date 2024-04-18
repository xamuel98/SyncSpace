export interface ILoginCredentials {
	email: string;
	password: string;
}

export interface ISignupCredentials {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	user_type: string;
}

export interface IForgotPasswordCredentials {
	email: string;
}

export interface IResetPasswordCredentials {
	new_password: string;
	token: string;
}

export interface IEmailVerificationCredentials {
	email: string;
}