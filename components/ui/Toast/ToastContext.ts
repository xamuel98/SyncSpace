"use client"

import { createContext } from 'react';
import { ToastContextType } from '@/types/Toast';

const defaultValue: ToastContextType = {
    createToast: function (): void {
        throw new Error('Function not implemented.');
    },
    removeToast: function (): void {
        throw new Error('Function not implemented.');
    },
    clearToastList: function (): void {
        throw new Error('Function not implemented.');
    }
};

export const ToastContext = createContext<ToastContextType>(defaultValue);