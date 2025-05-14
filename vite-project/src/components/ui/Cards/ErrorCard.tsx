import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  onRetry, 
  onDismiss 
}) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
      <div className="flex justify-between">
        <p>{message}</p>
        {onDismiss && (
          <button 
            onClick={onDismiss}
            className="text-red-700 hover:text-red-900"
            aria-label="Fermer"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
      
      {onRetry && (
        <button 
          onClick={onRetry}
          className="mt-2 text-sm underline"
        >
          Réessayer
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;