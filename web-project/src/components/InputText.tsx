import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputTextRootProps {
    children: ReactNode,
}
//Conteudo em volta do INPUT, props dele acima
function InputTextRoot(props: InputTextRootProps) {
    return(
        <div className="flex items-center gap-3 py-4 px-3 rounded-lg bg-low-80 w-full text-body-regular-sm 
      text-high-00 
        focus-within:ring-2 ring-warning-60 outline-none transition-all caret-warning-60">
            {props.children}
        </div>
    )
}
InputTextRoot.displayName = 'InputText.Root'

export interface InputTextIconProps {
    children: ReactNode;
}
//Icone do INPUT, props dele acima
function InputTextIcon(props: InputTextIconProps) {
    return(
        <Slot className='w-6 h-6 text-high-40'>
            {props.children}
        </Slot>
    )
}
InputTextIcon.displayName = 'InputText.Icon'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}
//Input em si, props dele acima
function InputTextInput(props: InputTextProps) {
    return (
            <input className='bg-transparent flex-1 text-body-regular-sm  placeholder:text-high-40 outline-none'
            {...props}
            />

    )
}
InputTextInput.displayName = 'InputText.Input'

export const InputText = {
    Root: InputTextRoot,
    Input: InputTextInput,
    Icon: InputTextIcon,
}