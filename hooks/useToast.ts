import { useContext } from 'react';

import { ToastContext } from '@/components/ui/Toast/ToastContext';

export const useToast = () => useContext(ToastContext);
