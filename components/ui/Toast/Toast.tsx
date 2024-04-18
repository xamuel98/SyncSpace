"use client"

import { useEffect } from 'react';
import { ToastProps } from '@/types/Toast';


const Toast = (props: ToastProps) => {
    const { removeToast, type, message, duration = 5000 } = props;

    useEffect(() => {
        if (!duration) return;
    
        const timeout = setTimeout(() => {
            removeToast()
        }, duration);
    
        return () => {
            // Anything in here is fired on component unmount.
            clearTimeout(timeout);
        }
      }, [duration, removeToast]);

    return (
        <>
            <div className={`toast ${type}`}>
                <div className="toast__content">
                    <div className="toast__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8Zm1.67 8.38c-.05.13-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.2-.21-.33A.995.995 0 0 1 11 16c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38Z" fill="none"></path>
                        </svg>
                    </div>
                    <p className="toast__message">
                        {message}
                    </p>
                </div>
                <button type="button" className="toast__button" onClick={removeToast}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15" stroke="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5L15 15" stroke="none" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Toast;