import ParagraphProps from "./Paragraph.props"
import classNames from "classnames"
import styles from './Paragraph.module.scss'

export const Paragraph = ({ size, children, className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p
			className={classNames(styles.paragraph, className, {
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.large]: size === 'large'
			})}
			{ ...props }
		>
			{ children }
		</p>
	)
}
