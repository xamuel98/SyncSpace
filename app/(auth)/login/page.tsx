"use client";

import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";

const Login = () => {
	const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

	/**
	 * @description Toggle the password field when the user toggles on the eye icon
	 */
	const togglePasswordVisibility = ():
		| MouseEventHandler<HTMLSpanElement>
		| undefined => {
		setPasswordVisible(!isPasswordVisible);
		return;
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
				<div className="w-full flex flex-col gap-y-4">
					<div className="w-full flex flex-col gap-y-2">
						<label
							htmlFor="email_address"
							className="font-medium text-sm text-dark-950"
						>
							Email address
						</label>
						<input
							type="email"
							className="form-input"
							placeholder="johndoe@email.com"
						/>
					</div>
					<div className="w-full flex flex-col gap-y-2">
						<label
							htmlFor="password"
							className="font-medium text-sm text-dark-950"
						>
							Password
						</label>
						<div className="w-full flex form-input">
							<input
								type={isPasswordVisible ? "text" : "password"}
								className="w-full outline-none shadow-none"
								placeholder="Enter your password"
							/>
							<span
								onClick={() => togglePasswordVisibility()}
								className={`${
									isPasswordVisible
										? "icon-[fluent--eye-off-24-regular]"
										: "icon-[fluent--eye-24-regular]"
								} text-dark-950 w-6 h-6 cursor-pointer`}
								role="button"
								aria-label={`${isPasswordVisible ? "Hide" : "Show"} password`}
							></span>
						</div>
					</div>
				</div>
			</div>
			{/* Button */}
			<div className="flex flex-col gap-y-8 w-full">
				<div className="flex flex-col justify-center items-center gap-y-4 w-full">
					<button className="w-full bg-dark-950 p-3 font-medium text-base/7 text-white rounded-xl hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out">
						Log in
					</button>
					<p className="text-sm/5 font-normal text-dark-400 text-center">
                        Don&#39;t have an account?{" "}
						<Link href="/register" className="link">
                            Create account
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
