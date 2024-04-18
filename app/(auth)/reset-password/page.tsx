"use client";

import { useResetPasswordMutation } from "@/services/authApi";
import type { IResetPasswordCredentials } from "@/types/Auth";
import DynamicForm from "@/components/form/DynamicForm";
import resetPasswordFormSchema from "./schema"
import { useErrorService, useSuccessService } from "@/hooks/useErrorSuccessService";
import { useRouter } from "next/navigation";
import drive from "@/utils/drive";
import { PAGE_ROUTES } from "@/utils/constants";

const ResetPassword = () => {
	const [resetPassword] = useResetPasswordMutation();
	const resetPasswordSchema = resetPasswordFormSchema();
	const router = useRouter()
	const { handleError } = useErrorService();
	const { handleSuccess } = useSuccessService();

    const token = drive.get("reset_password_token");
	
	const submitForm = async (values: IResetPasswordCredentials) => {
		try {
			const resetPasswordResult = await resetPassword({
				token,
				new_password: values.new_password,
			}).unwrap();

            drive.clear() // Clear all storage items
			handleSuccess(resetPasswordResult)
			await router.replace(PAGE_ROUTES.LOGIN_ROUTE)

			return resetPasswordResult;
		} catch (error: unknown) {
			handleError(error);
		}
	};

    return (
        <div className="w-full flex flex-col gap-y-10">
			<div className="w-full flex flex-col gap-y-10">
				<div className="w-full flex flex-col gap-y-0 lg:gap-y-4">
					<h1 className="text-dark-950 font-medium lg:leading-[42px] xl:leading-[52px] auth-header--text bricolage">
						At last! Recover your account
					</h1>
					<p className="text-dark-400 font-normal auth-base--text leading-[24px]">
						Set a new password to your SyncSpace account to continue
					</p>
				</div>
				<DynamicForm 
					submit={submitForm} 
					schema={resetPasswordSchema} 
					enableReinitialize={true}
				/>
			</div>
		</div>
    )
}

export default ResetPassword