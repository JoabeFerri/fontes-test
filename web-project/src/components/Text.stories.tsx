import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text default',
        size: 'text-display-lg'
    },

} as Meta<TextProps>

export const Heading: StoryObj = {
    argTypes: {
        size: {
            options: ['text-display-lg', 'text-display-md',
            'text-title-lg', 'text-title-md',
            'text-subtitle-md', 'text-subtitle-sm']
        },
        asChild: {
            table: {
                disable:true,
            }
        }    
    }
}

export const Paragraphs: StoryObj = {
    argTypes: {
        size: {
            options: ['text-body-regular-md', 'text-body-bold-md', 'text-body-regular-sm', 'text-body-bold-sm',]
        },
        asChild: {
                table: {
                    disable:true,
                }
        }     
    }
}



export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Test</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable:true,
            }

        }
    }
}
