import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export default interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean,
	rating: number,
	setRating?: (rating: number) => void
}
