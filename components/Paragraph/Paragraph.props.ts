import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 'small' | 'medium' | 'large',
	children: ReactNode
}
