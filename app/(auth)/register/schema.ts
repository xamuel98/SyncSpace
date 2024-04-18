import { object, string } from "yup";
import { PasswordCheck } from "@/utils/constants";

const {
	MINIMUM_PASSWORD_LENGTH,
	MAXIMUM_PASSWORD_LENGTH,
	MATCH_UPPERCASE_LOWERCASE,
	MATCH_SPECIAL_CHARACTER,
	MATCH_NUMBER,
} = PasswordCheck;

// eslint-disable-next-line import/no-anonymous-default-export
export default (values = {}) => ({
	fields: [
		{
			label: "First name",
			name: "first_name",
			formType: "InputTextField",
			placeholder: "John",
			class: "col-span-6",
		},
		{
			label: "Last name",
			name: "last_name",
			formType: "InputTextField",
			placeholder: "Doe",
			class: "col-span-6",
		},
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
		first_name: string().required().label("First name"),
		last_name: string().required().label("Last name"),
		email: string().email().required().label("Email address"),
		password: string()
			.required().label("Password")
			.min(
				MINIMUM_PASSWORD_LENGTH,
				`The password needs to have a minimum of ${MINIMUM_PASSWORD_LENGTH} characters`
			)
			.max(
				MAXIMUM_PASSWORD_LENGTH,
				`The password needs to have a maximum of ${MAXIMUM_PASSWORD_LENGTH} characters`
			)
			.matches(
				new RegExp(MATCH_UPPERCASE_LOWERCASE),
				"Must contain one uppercase, one lowercase"
			)
			.matches(
				// eslint-disable-next-line no-useless-escape
				new RegExp(MATCH_SPECIAL_CHARACTER),
				"Need one special character"
			)
			.matches(new RegExp(MATCH_NUMBER), "Must contain one number"),
	}),
	values: {
		first_name: "",
        last_name: "",
        email: "",
        password: "",
        ...values,
	},
	class: "w-full grid grid-cols-6 gap-4",
	buttonLabel: "Create account",
	buttonClass: "",
});
