import React, { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { Search, ArrowDown } from 'lucide-react';

// Utility to combine class names
const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ');

// Button Props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

// Basic Button Component
const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    'h-9 px-4',
    className
  );

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};

// Input Props
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// Basic Input Component
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const baseClasses = cn(
    'flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm',
    'file:border-0 file:bg-transparent file:text-sm file:font-medium',
    'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed',
    'disabled:opacity-50',
    className
  );

  return <input className={baseClasses} {...props} />;
};

// Main Component
const MusicTeachersAnalyticsHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between lg:p-4 max-md:flex-col max-md:w-full">
      <h1 className="text-lg font-bold text-blue-800">
        MUSIC TEACHERS ANALYTICS
      </h1>

      <div className="flex items-center bg-white gap-4 max-md:justify-between max-md:w-full max-md:space-x-2 relative">
        <Button
          className={cn(
            'text-black hover:bg-gray-700/50',
            'border border-gray-700',
            'flex items-center gap-2'
          )}
        >
          Sort
          <ArrowDown className="w-4 h-4" />
        </Button>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            className={cn(
              'w-40 md:w-64 bg-white text-gray-900 placeholder:text-gray-400',
              'border-gray-300',
              'focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2',
              'transition-all duration-200',
              'hover:bg-gray-100',
              'focus:bg-white',
              'pr-10' // padding right for search icon
            )}
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default MusicTeachersAnalyticsHeader;
