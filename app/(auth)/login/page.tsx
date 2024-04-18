"use client";

import Link from "next/link";
import { useLoginMutation } from "@/services/authApi";
import type { ILoginCredentials } from "@/types/Auth";
import DynamicForm from "@/components/form/DynamicForm";
import loginFormSchema from "./schema"
import { useErrorService, useSuccessService } from "@/hooks/useErrorSuccessService";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setTokenCredentials } from "@/store/reducers/auth";
import { setUser } from "@/store/reducers/user";
import { PAGE_ROUTES } from "@/utils/constants";

const Login = () => {
	const dispatch = useAppDispatch();
	const [login] = useLoginMutation();
	const loginSchema = loginFormSchema();
	const router = useRouter()
	const { handleError } = useErrorService();
	const { handleSuccess } = useSuccessService();
	

	const submitForm = async (values: ILoginCredentials) => {
		try {
			const loginResult = await login({
				email: values.email,
				password: values.password,
			}).unwrap();

			const { data: {
				id, 
				first_name,
				last_name,
				email,
				email_verified,
				profile_photo_url,
				user_type,
				status,
				video_settings,
				audio_settings,
				created_at,
				updated_at,
				access_token
			} } = loginResult.data

			const userCredentials = {
				id, 
				first_name,
				last_name,
				email,
				email_verified,
				profile_photo_url,
				user_type,
				status,
				video_settings,
				audio_settings,
				created_at,
				updated_at,
			}

			document.cookie = "token=" + access_token + ";path=/;max-age=3600;Secure"; // max-age is the TTL of the cookie in seconds

			dispatch(setTokenCredentials(access_token)); // Set token to auth state
			dispatch(setUser(userCredentials)); // Set user to auth state

			handleSuccess(loginResult)
			await router.replace(PAGE_ROUTES.DASHBOARD_ROUTE)

			return loginResult;
		} catch (error: unknown) {
			handleError(error);
		}
	};

	return (
		<div className="w-full flex flex-col gap-y-10">
			<div className="w-full flex flex-col gap-y-10">
				<div className="w-full flex flex-col gap-y-0 lg:gap-y-4">
					<h1 className="text-dark-950 font-medium lg:leading-[42px] xl:leading-[52px] auth-header--text bricolage">
						Oh! Nice to see you again
					</h1>
					<p className="text-dark-400 font-normal auth-base--text leading-[24px]">
						Log in to your SyncSpace account to continue
					</p>
				</div>
				<DynamicForm 
					submit={submitForm} 
					schema={loginSchema} 
					enableReinitialize={true}
					beforeBtn={
						<div className="w-full flex-end">
							<Link href="/forgot-password" className="link text-sm/5">
								Forgot password?
							</Link>
						</div>
					}
					afterBtn={
						<p className="text-sm/5 font-normal text-dark-400 text-center">
							Don&#39;t have an account?{" "}
							<Link href="/register" className="link">
								Create account
							</Link>
						</p>
					}
				/>
			</div>
		</div>
	);
};

export default Login;
