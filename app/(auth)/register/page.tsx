"use client";

import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import Checkbox from "@/components/ui/checkbox/Checkbox";

const Register = () => {
	const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);
	const [isAcceptTermsCheckboxChecked, setIsAcceptTermsCheckboxChecked] = useState(false);

	/**
	 * @description Toggle the password field when the user toggles on the eye icon
	 */
	const togglePasswordVisibility = ():
		| MouseEventHandler<HTMLSpanElement>
		| undefined => {
		setPasswordVisible(!isPasswordVisible);
		return;
	};

	/**
	 * @description Handles the change event for the checkbox.
	 * @param {boolean} newValue The value of the checkbox
	 * @returns {void}
	 */
	const handleCheckboxChange = (newValue: boolean): void => {
		setIsAcceptTermsCheckboxChecked(newValue);
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
				<div className="w-full flex flex-col gap-y-4">
					<div className="w-full flex flex-col gap-y-2">
						<label
							htmlFor="full_name"
							className="font-medium text-sm text-dark-950"
						>
							Full name
						</label>
						<input
							type="text"
							className="form-input"
							placeholder="John Doe"
						/>
					</div>
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
				<div className="flex items-start gap-x-3 w-full">
					<Checkbox
						value={isAcceptTermsCheckboxChecked}
						name="accept_terms"
						binary={true}
						onChange={handleCheckboxChange}
					/>
					<label
						htmlFor="accept_terms"
						className="text-sm/5 font-normal text-dark-400"
					>
						Creating an account means you are okay with our{" "}
						<Link href="/" className="link">
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link href="/" className="link">
							Privacy Policy
						</Link>
					</label>
				</div>
				<div className="flex flex-col justify-center items-center gap-y-4 w-full">
					<button className="w-full bg-dark-950 p-3 font-medium text-base/7 text-white rounded-xl hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out">
						Create account
					</button>
					<p className="text-sm/5 font-normal text-dark-400 text-center">
						Already have an account?{" "}
						<Link href="/login" className="link">
							Log in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
