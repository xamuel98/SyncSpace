import {
	ILoginCredentials,
	ISignupCredentials,
	IForgotPasswordCredentials,
	IEmailVerificationCredentials,
	IResetPasswordCredentials
} from "@/types/Auth";
import baseApi from "./api";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials: ILoginCredentials) => ({
				url: "/auth/api/v1/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		register: builder.mutation({
			query: (credentials: ISignupCredentials) => ({
				url: "/auth/api/v1/register",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		verifyRegisterEmail: builder.mutation({
			query: (token: string) => ({
				url: `/auth/api/v1/verify-email/${token}`,
				method: "PUT",
			}),
		}),
		resendVerificationEmail: builder.mutation({
			query: (credentials: IEmailVerificationCredentials) => ({
				url: "/auth/api/v1/resend-verification-email",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		verifyForgotPasswordEmail: builder.mutation({
			query: (token: string) => ({
                url: `/auth/api/v1/verify-forgot-password/${token}`,
                method: "PUT",
            }),
		}),
		resendForgotPasswordVerificationEmail: builder.mutation({
			query: (credentials: IEmailVerificationCredentials) => ({
				url: "/auth/api/v1/resend-verification-email",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		forgotPassword: builder.mutation({
			query: (credentials: IForgotPasswordCredentials) => ({
				url: "/auth/api/v1/forgot-password",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		resetPassword: builder.mutation({
			query: (credentials: IResetPasswordCredentials) => ({
				url: `/auth/api/v1/reset-password/${credentials.token}`,
				method: "PUT",
				body: { 
					new_password: credentials.new_password,
                },
			}),
		}),
	}),
});

export const {
	useLoginMutation,
    useRegisterMutation,
	useVerifyRegisterEmailMutation,
	useResendVerificationEmailMutation,
	useResendForgotPasswordVerificationEmailMutation,
	useVerifyForgotPasswordEmailMutation,
	useForgotPasswordMutation,
	useResetPasswordMutation,
} = authApi;
