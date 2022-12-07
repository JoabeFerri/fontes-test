import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';


export interface TextProps {
    size?: 'text-display-lg' | 'text-display-md' |
    'text-title-lg' | 'text-title-md' | 
    'text-subtitle-md' | 'text-subtitle-sm' |
    'text-body-regular-md' | 'text-body-bold-md' | 'text-body-regular-sm' | 'text-body-bold-sm',
    children: ReactNode,
    asChild?: boolean,
    className?: string,
}

export function Text({ size = 'text-display-md', children, asChild, className}: TextProps) {
    const Comp = asChild? Slot : 'span'

    return (
        <Comp className={clsx(
            "text-high-00 font-sans", size, className
        )}>
            {children}
        </Comp>
    )
}