import ButtonProps from './Button.props'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowRight,
	faArrowDown
} from "@fortawesome/free-solid-svg-icons"

export const Button = ({ children, arrow = 'none', appearance, className, ...props }: ButtonProps): JSX.Element => {
	let icon = null
	if (arrow === 'down') {
		icon = <FontAwesomeIcon icon={faArrowDown} />
	}
	if (arrow === 'right') {
		icon = <FontAwesomeIcon icon={faArrowRight} />
	}

	return (
		<button
			className={classNames(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			})}
			{ ...props }
		>
			{ children }
			{ icon }
		</button>
	)
}
