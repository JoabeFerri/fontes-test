import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    asChild?: boolean,
}

export function Button({ children, asChild, className, ...props}: ButtonProps) {
    const Comp = asChild? Slot : 'button'

    return (
        <Comp className={clsx(
            "py-3 px-4 bg-warning-60 rounded-lg text-high-00 text-body-regular-md w-full",
            "hover:bg-warning-50 transition-all",
            "focus:ring-2 ring-high-00",
            "active:bg-warning-100", className,
        )}
        {...props}
        >
            {children}
        </Comp>
    )
}