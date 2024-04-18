'use client'

import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useVerifyRegisterEmailMutation } from '@/services/authApi'
import { useErrorService } from '@/hooks/useErrorSuccessService'
import { useToast } from "@/hooks/useToast";
import { PAGE_ROUTES } from '@/utils/constants'
import { maskify } from '@/utils'

const VerifyRegisterEmail = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialized = useRef<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [statusCode, setStatusCode] = useState<number | null>(null);
    const [verifyRegisterEmail] = useVerifyRegisterEmailMutation();
    const { handleError } = useErrorService();
    const { createToast } = useToast();

    const token = searchParams.get('token');
    let timeout: any;

    /**
     * @description Handle email verification
     * @returns 
     */
    const verifyEmail = async () => {
        if (token) {
            try {
                setLoading(true);

                const verifyEmailResult: any = await verifyRegisterEmail(token);
            
                if (verifyEmailResult?.data?.statusCode === 200) {
                    setStatusCode(verifyEmailResult?.data?.statusCode);

                    createToast({
                        type: 'success',
                        message: verifyEmailResult?.data?.message
                    })

                    timeout = setTimeout(() => {
                        router.replace(PAGE_ROUTES.LOGIN_ROUTE)
                    }, 5000)
                } else if (verifyEmailResult?.error?.data?.statusCode === 400) {
                    setStatusCode(verifyEmailResult?.error?.data?.statusCode);

                    createToast({
                        type: 'danger',
                        message: verifyEmailResult?.error?.data?.message
                    })
                }
            } catch (error: unknown) {
                handleError(error)
                setLoading(false);
            } finally {
                setLoading(false);
            }
        } else {
            createToast({
                type: 'danger',
                message: 'Failed to get token'
            })
        }
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
        
            if (token) {
                verifyEmail()

                // Construct the URL string with query parameters manually
                const queryString = new URLSearchParams({ ...(router as any).query, token: maskify(token) }).toString();
                const url = `/verify?${queryString}`;
                router.replace(url);
            }
        }

        return () => clearTimeout(timeout);
    }, [token, timeout])

    return (
        <Suspense>
            <div className='w-full h-screen flex items-center justify-center'>
                {loading &&
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <i className="pi pi-spin pi-spinner" style={{ fontSize: '1.5rem' }}></i>
                        <p>Verifying your email address</p>
                    </div>
                }

                {(!loading && statusCode === 200) && 
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <span className="icon-[fluent--checkmark-circle-24-filled] w-8 h-8 text-green-500"></span>
                        <p>Your email address has been verified</p>
                    </div>
                }

                {(!loading && statusCode === 400) && 
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <span className="icon-[fluent--error-circle-24-filled] w-8 h-8 text-red-600"></span>
                        <p>Email verification failed</p>
                    </div>
                }
            </div>
        </Suspense>
    )
}

export default VerifyRegisterEmail