import { Meta, StoryObj } from '@storybook/react'
import { User } from 'phosphor-react'
import { InputText, InputTextProps, InputTextRootProps } from './InputText'

export default {
    title: 'Components/InputText',
    component: InputText.Root,
    args: {
        children: (
            <>
                <InputText.Icon>
                    <User/>
                </InputText.Icon>
                <InputText.Input placeholder='Digite seu usuario'/>
            </>
        ),
        
    },
    argTypes: {
        children: {
            table: {
                disable:true,
            }

        }
    }

} as Meta<InputTextRootProps>

export const Default: StoryObj<InputTextRootProps> = {

}
