export interface ToastProps {
    id: string;
    removeToast: () => void;
    type: string;
    message: string;
    duration?: number;
}

export interface ToastOptions {
    id?: string;
    type: string;
    message: string;
    duration?: number;
}

export interface ToastContextType {
    createToast: (options: ToastOptions) => void;
    removeToast?: (id: string) => void;
    clearToastList: () => void;
}