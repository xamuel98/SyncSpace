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
	],
	validation: object({
		email: string().email().required().label("Email address"),
	}),
	values: {
        email: "",
        ...values,
	},
	class: "w-full grid grid-cols-6 gap-4",
	buttonLabel: "Reset password",
	buttonClass: "",
});
