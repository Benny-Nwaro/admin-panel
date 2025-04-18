import React, { ReactElement, ReactNode, isValidElement, useState } from "react";

interface TabsProps {
  children: ReactNode;
  defaultValue: string;
}

interface TabsListProps {
  children: ReactNode;
  value: string;
  setValue: (value: string) => void;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string; // Still needed in the interface for type checking where it's used
  onClick: () => void;
  active: boolean;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;
}

// components/ui/input.tsx
export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`border rounded px-3 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}

// components/ui/button.tsx
export function Button({
  className = "",
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "ghost" }) {
  const baseStyle = "px-4 py-2 rounded text-sm font-medium";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props} />
  );
}

// components/ui/card.tsx
export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-[#F1F1F9] rounded-2xl shadow-sm border ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`} {...props} />;
}

export function Tabs({ children, defaultValue }: TabsProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="space-y-4 overflow-auto">
      {React.Children.map(children, (child) => {
        if (!isValidElement(child)) return null;

        if ((child.type as React.FC<TabsListProps>).displayName === 'TabsList') {
          return React.cloneElement(child as ReactElement<TabsListProps>, { value, setValue });
        }
        if ((child.type as React.FC<TabsContentProps>).displayName === 'TabsContent' && (child as ReactElement<TabsContentProps>).props.value === value) {
          return child;
        }
        return null;
      })}
    </div>
  );
}

export function TabsList({ children, value, setValue }: TabsListProps) {
  return (
    <div className="flex space-x-4 border-b pb-2">
      {React.Children.map(children, (child) => {
        if (!isValidElement(child)) return null;
        return React.cloneElement(child as ReactElement<TabsTriggerProps>, {
          active: value === (child as ReactElement<TabsTriggerProps>).props.value,
          onClick: () => setValue((child as ReactElement<TabsTriggerProps>).props.value),
        });
      })}
    </div>
  );
}
TabsList.displayName = 'TabsList';

export function TabsTrigger({ children, onClick, active }: TabsTriggerProps) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-sm font-medium border-b-2 ${active ? 'border-black' : 'border-transparent text-gray-500 hover:text-black'}`}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = 'TabsTrigger';

export function TabsContent({ children }: TabsContentProps) {
  return <div>{children}</div>;
}
TabsContent.displayName = 'TabsContent';