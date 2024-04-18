"use client"

import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { ToastOptions, ToastProps } from '@/types/Toast';
import Toast from './Toast';
import { ToastContext } from './ToastContext';

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastList, setToastList] = useState<ToastProps[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false); // State to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true once the component mounts
  }, []);

  const createToast = (options: ToastOptions): void => {
    const toastId = uuidv4();

    const newToast: ToastProps = {
      id: toastId,
      ...options, // if id is passed within options, it will overwrite the auto-generated one
      removeToast: () => removeToast(options.id ?? toastId),
    };

    return setToastList((currentToasts) => [newToast, ...currentToasts]);
  };

  const removeToast = (id: string): void => {
    return setToastList((currentToasts) =>
      currentToasts.filter((toast: ToastProps) => toast.id !== id),
    );
  };

  const clearToastList = (): void => setToastList([]);

  const contextValue = useMemo(
    () => ({ createToast, removeToast, clearToastList }),
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {isClient && createPortal(
        toastList && toastList.length > 0 ? (
          <div className='notification-container bottom-middle'>
            {toastList.map((toast: ToastProps) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </div>
        ) : null,
        document.body,
      )}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
