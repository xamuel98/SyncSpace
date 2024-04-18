import { object, ref, string } from "yup";
import { PasswordCheck } from "@/utils/constants";

const {
	MAXIMUM_PASSWORD_LENGTH,
	MATCH_NUMBER,
	MINIMUM_PASSWORD_LENGTH,
	MATCH_UPPERCASE_LOWERCASE,
	MATCH_SPECIAL_CHARACTER,
} = PasswordCheck;

// eslint-disable-next-line import/no-anonymous-default-export
export default (values = {}) => ({
	fields: [
		{
			label: "New password",
			name: "new_password",
			formType: "PasswordField",
			placeholder: "Enter your new password",
			class: "col-span-6",
			toggleMask: true,
			feedback: false,
		},
		{
			label: "Confirm new password",
			name: "confirm_password",
			formType: "PasswordField",
			placeholder: "Confirm your new password",
			class: "col-span-6",
			toggleMask: true,
			feedback: false,
		},
	],
	validation: object({
		new_password: string()
			.required()
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
			.matches(new RegExp(MATCH_NUMBER), "Must contain one number")
			.label("New Password"),
		confirm_password: string()
			.oneOf([ref("new_password")], "Passwords must match")
			.required("Confirm New Password is required"),
	}),
	values: {
		new_password: "",
		...values,
	},
	class: "w-full grid grid-cols-6 gap-4",
	buttonLabel: "Reset Password",
	buttonClass: "",
});
