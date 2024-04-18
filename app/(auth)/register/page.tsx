"use client";

import React, { useState } from "react";
import Link from "next/link";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import DynamicForm from "@/components/form/DynamicForm";
import registerFormSchema from "./schema"
import type { ISignupCredentials } from "@/types/Auth";
import { useRegisterMutation } from "@/services/authApi";
import { useErrorService, useSuccessService } from "@/hooks/useErrorSuccessService";
import drive from "@/utils/drive";
import { useRouter } from "next/navigation";
import { PAGE_ROUTES } from "@/utils/constants";

const Register = () => {
	const [register] = useRegisterMutation();
	const registerSchema = registerFormSchema();
	const { handleError } = useErrorService();
	const { handleSuccess } = useSuccessService();
	const router = useRouter();

	const [isAcceptTerms, setIsAcceptTerms] = useState<boolean>(false);
	const [agreed, setAgreed] = useState<boolean>(false);

	/**
	 * @description Handles the change event for the checkbox.
	 * @param {boolean} newValue The value of the checkbox
	 * @returns {void}
	 */
	const handleCheckboxChange = (newValue: boolean): void => {
		setIsAcceptTerms(newValue);
		setAgreed(!newValue);
	};

	/**
	 * @description Register user
	 * @param values 
	 * @returns 
	 */
	const submitForm = async (values: ISignupCredentials) => {
		// Validate agreement to terms
		if (!isAcceptTerms) {
			setAgreed(true)
			return
		}

		// Initiate Submission
		if (isAcceptTerms && values) {
			try {
				const registerResult = await register({
					first_name: values.first_name,
					last_name: values.last_name,
					email: values.email,
					password: values.password,
					user_type: "USER",
				}).unwrap();

				drive.set("email", values.email)
				router.push(PAGE_ROUTES.EMAIL_VERIFICATION_ROUTE)

				handleSuccess(registerResult)

				return registerResult;
			} catch (error: unknown) {
				console.log(error);
				handleError(error)
			}
		}
	};

	return (
		<div className="w-full flex flex-col gap-y-10">
			<div className="w-full flex flex-col gap-y-10">
				<div className="w-full flex flex-col gap-y-0 lg:gap-y-4">
					<h1 className="text-dark-950 font-medium auth-header--text lg:leading-[42px] xl:leading-[52px] bricolage">
						Empowering teams to sync and innovate together
					</h1>
					<p className="text-dark-400 font-normal auth-base--text leading-[24px]">
						Ready to begin? Sign up now and embark on an adventure
					</p>
				</div>
				<DynamicForm 
					submit={submitForm} 
					disableSubmit={!isAcceptTerms}
					schema={registerSchema} 
					enableReinitialize={true}
					beforeBtn={
						<>
							<div className="flex items-start gap-x-3 w-full mt-4">
								<Checkbox
									value={isAcceptTerms}
									name="accept_terms"
									binary={true}
									onChange={handleCheckboxChange}
								/>
								<label
									htmlFor="accept_terms"
									className="text-sm/5 font-normal text-dark-400"
								>
									Creating an account means you accept our{" "}
									<Link href="/" className="link">
										Terms of Service
									</Link>{" "}
									and{" "}
									<Link href="/" className="link">
										Privacy Policy
									</Link>
								</label>
							</div>

							{ agreed ? 
								<small className="error-message">
									Terms and conditions is required
								</small>
								:
								null
							}
						</>
					}
					afterBtn={
						<p className="text-sm/5 font-normal text-dark-400 text-center">
							Already have an account?{" "}
							<Link href="/login" className="link">
								Log in
							</Link>
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default Register;

