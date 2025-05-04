import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    const widthClass = fullWidth ? 'w-full' : '';
    const errorClass = error ? 'border-error focus:border-error focus:ring-error' : '';
    
    return (
      <div className={`${widthClass} ${className}`}>
        {label && (
          <label
            htmlFor={props.id}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 ${errorClass} ${widthClass}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-error">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;