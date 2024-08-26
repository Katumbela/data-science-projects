"use client"

import { Toast } from 'flowbite-react';
import React, { useState } from 'react';
import { HiCheck, HiX, HiExclamation, HiInformationCircle } from 'react-icons/hi';

interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

let toastCounter = 0;

const useFlowbiteToasts = () => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
    const id = ++toastCounter;
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const showSuccessToast = (message: string) => showToast(message, 'success');
  const showErrorToast = (message: string) => showToast(message, 'error');
  const showWarningToast = (message: string) => showToast(message, 'warning');
  const showInfoToast = (message: string) => showToast(message, 'info');

  const renderToasts = () => (
    <div className="fixed top-5 right-5 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id}>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            {toast.type === 'success' && <HiCheck className="h-5 w-5 text-green-500" />}
            {toast.type === 'error' && <HiX className="h-5 w-5 text-red-500" />}
            {toast.type === 'warning' && <HiExclamation className="h-5 w-5 text-yellow-500" />}
            {toast.type === 'info' && <HiInformationCircle className="h-5 w-5 text-blue-500" />}
          </div>
          <div className="ml-3 text-sm font-normal">{toast.message}</div>
          <Toast.Toggle />
        </Toast>
      ))}
    </div>
  );

  return {
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,
    renderToasts,
  };
};


export default useFlowbiteToasts