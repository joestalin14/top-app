import RatingProps from './Rating.props'
import styles from './Rating.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faStar
} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<FontAwesomeIcon
					key={`ratingItemIcon${i + 1}`}
					className={classNames(styles.star, {
						[styles.fill]: i < currentRating,
						[styles.editable]: isEditable
					})}
					icon={faStar}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeRating(i + 1)}
				/>
			)
		})
		setRatingArray(updatedArray)
	}

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return
		}
		constructRating(i)
	}

	const changeRating = (i: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}

	return (
		<div
			{...props}
		>
			{ratingArray.map((r, i) => (<span key={`ratingItemSpan${i + 1}`}>{r}</span>))}
		</div>
	)
}
