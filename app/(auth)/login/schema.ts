import { object, string } from "yup";

// eslint-disable-next-line import/no-anonymous-default-export
export default (values = {}) => ({
	fields: [
		{
			label: "Email address",
			name: "email",
			formType: "InputTextField",
			placeholder: "johndoe@example.com",
			class: "col-span-6",
		},
		{
			label: "Password",
			name: "password",
			formType: "PasswordField",
			placeholder: "Enter your password",
			class: "col-span-6",
			toggleMask: true,
			feedback: false,
		},
	],
	validation: object({
		email: string().email().required().label("Email address"),
		password: string().required().label("Password"),
	}),
	values: {
		email: "",
		password: "",
		...values,
	},
	class: "w-full grid grid-cols-6 gap-4",
	buttonLabel: "Log in",
	buttonClass: "",
});
