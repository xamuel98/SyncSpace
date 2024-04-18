"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import Timer from "@/components/Timer";
import { PAGE_ROUTES } from "@/utils/constants";
import drive from "@/utils/drive";

const VerifyEmail = () => {
    const router = useRouter();

    const email = drive.get("email") // Get Email from ls

    /**
     * @description Handle routing to the login page
     */
    const handleGoToLogin = () => {
        router.replace(PAGE_ROUTES.LOGIN_ROUTE);
    }

	return (
        <Suspense>
            <div className="w-full flex flex-col gap-y-10">
                <div className="w-full flex flex-col gap-y-10">
                    <div className="w-full flex flex-col gap-y-0 lg:gap-y-4">
                        <h1 className="text-dark-950 font-medium auth-header--text lg:leading-[42px] xl:leading-[52px] bricolage">
                            Verify your email
                        </h1>
                        <p className="text-dark-400 font-normal auth-base--text leading-[24px]">
                            A verification link has been sent to {email ? <span className="font-medium text-dark-950">{email}</span> : null} <br /> Open your email and click on the link to verify your email
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col justify-center items-center gap-y-4 w-full">
                        <button
                            type="button"
                            onClick={handleGoToLogin}
                            className={`w-full bg-dark-950 p-3 font-medium text-base/7 text-white rounded-xl hover:bg-[#3d3d3d] transition-colors duration-300 ease-in-out`}
                        >
                            Go back to login
                        </button>

                        <p className="text-sm/5 font-normal text-dark-400 text-center">
                            Didn&#39;t get a link?{" "}
                            <Timer origin="email-verification" />
                        </p>
                    </div>
                </div>
            </div>
        </Suspense>
	);
};

export default VerifyEmail;

