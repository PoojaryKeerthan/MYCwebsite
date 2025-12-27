'use client';

import React, { useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface SuccessMessageProps {
  isVisible: boolean;
  message: string;
  onClose: () => void;
}

const SuccessMessage = ({ isVisible, message, onClose }: SuccessMessageProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
      <div className="bg-success text-success-foreground rounded-lg shadow-brand-lg p-4 flex items-center space-x-3 max-w-md">
        <Icon name="CheckCircleIcon" size={24} className="flex-shrink-0" />
        <p className="font-source font-medium text-sm flex-1">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;