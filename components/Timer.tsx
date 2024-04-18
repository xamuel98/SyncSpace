import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";
import { useResendVerificationEmailMutation, useResendForgotPasswordVerificationEmailMutation } from "@/services/authApi";
import drive from "@/utils/drive";
import { useErrorService, useSuccessService } from "@/hooks/useErrorSuccessService";

interface TimerProps {
	origin?: string | null;
}

const Timer = ({ origin }: TimerProps) => {
	const [resendVerificationEmail] = useResendVerificationEmailMutation();
	const [resendForgotPasswordVerificationEmail] = useResendForgotPasswordVerificationEmailMutation();
	const { handleSuccess } = useSuccessService()
	const { handleError } = useErrorService()

	const userEmail = drive.get("email")

	// Timer
	const time = 1;
	const [countdownId, setCountdownId] = useState<number | null>(null);
	const [timerId] = useState<number | null>(null);
	const [currentTime, setCurrentTime] = useState<number>(time * 60);

	const timeOutCallback = useCallback(
		() => setCurrentTime((currTimer) => currTimer - 1),
		[]
	);

	const startCountdown = () => {
		setCountdownId(setInterval(timeOutCallback, 1000) as unknown as number);
	};

	const stopCountdown = () => {
		if (countdownId !== null) {
			clearInterval(countdownId);
		}
		setCurrentTime(0);
		setCountdownId(null);
	};

	useEffect(() => {
		startCountdown();
		return () => {
			if (countdownId !== null) {
				clearInterval(countdownId);
			}
			if (timerId !== null) {
				clearTimeout(timerId);
			}
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const resendVerificationCode = async () => {
		// Implement your resend code logic here
		if (origin === "forgot-password") {
			if (userEmail) {
				try {
					const forgotPasswordVerificationResult = await resendForgotPasswordVerificationEmail({
						email: userEmail,
					}).unwrap();
	
					handleSuccess(forgotPasswordVerificationResult)
					return forgotPasswordVerificationResult;
				} catch (error: unknown) {
					handleError(error)
				}
			}
		} else if (origin === "email-verification") {
			if (userEmail) {
				try {
					const emailVerificationResult = await resendVerificationEmail({
						email: userEmail,
					}).unwrap();
	
					handleSuccess(emailVerificationResult)

					setCurrentTime(time * 60);

					if (countdownId) {
						stopCountdown();
					} else {
						startCountdown();
					}
					return emailVerificationResult;
				} catch (error: unknown) {
					handleError(error)
				}
			}
		}
	};

	const handleButtonClick = () => {
		if (currentTime <= 0) {
			resendVerificationCode();
		}
	};

	useEffect(() => {
		if (currentTime === 0) {
			stopCountdown();
		}
	}, [currentTime]); // eslint-disable-line react-hooks/exhaustive-deps

	const timer = `${Math.floor(currentTime / 60)
		.toString()
		.padStart(2, "0")} : ${Math.floor(currentTime % 60)
		.toString()
		.padStart(2, "0")}`;

	return (
        <button 
            onClick={handleButtonClick}
            type="button"
            className={cn('link', {"!bg-transparent cursor-not-allowed": currentTime > 0})}
            disabled={currentTime > 0}
        >
            {currentTime > 0 ? (
				<span>({timer})</span>
			) : <span>Request new link</span> }
        </button>
	);
};

export default Timer;
