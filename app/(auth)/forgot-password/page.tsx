"use client";

import React from "react";
import Link from "next/link";
import DynamicForm from "@/components/form/DynamicForm";
import forgotPasswordFormSchema from "./schema"
import type { IForgotPasswordCredentials } from "@/types/Auth";
import { useForgotPasswordMutation } from "@/services/authApi";
import { useRouter } from "next/navigation";
import drive from "@/utils/drive";
import { PAGE_ROUTES } from "@/utils/constants";

const ForgotPassword = () => {
	const [forgotPassword] = useForgotPasswordMutation();
	const forgotPasswordSchema = forgotPasswordFormSchema();
	const router  = useRouter()

	/**
	 * @description Forgot user password
	 * @param values 
	 * @returns 
	 */
	const submitForm = async (values: IForgotPasswordCredentials) => {
		try {
			const forgotPasswordResult = await forgotPassword({
				email: values.email,
			}).unwrap();

			drive.set("forgot_password_email", values.email)
			router.replace(PAGE_ROUTES.FORGOT_PASSWORD_EMAIL_ROUTE)

			return forgotPasswordResult;
		} catch (err: unknown) {
			console.log(err);
		}
	};

	return (
		<div className="w-full flex flex-col gap-y-10">
			<div className="w-full flex flex-col gap-y-10">
				<div className="w-full flex flex-col gap-y-0 lg:gap-y-4">
					<h1 className="text-dark-950 font-medium auth-header--text lg:leading-[42px] xl:leading-[52px] bricolage">
						Reset your password
					</h1>
					<p className="text-dark-400 font-normal auth-base--text leading-[24px]">
						Enter the email linked to your SyncSpace account for a password change.
					</p>
				</div>
				<DynamicForm 
					submit={submitForm}
					schema={forgotPasswordSchema} 
					enableReinitialize={true}
					afterBtn={
						<p className="text-sm/5 font-normal text-dark-400 text-center">
							<Link href="/login" className="link">
								Go back to login
							</Link>
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default ForgotPassword;

