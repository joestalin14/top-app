import { TagProps } from './Tag.props'
import classNames from 'classnames'
import styles from './Tag.module.scss'

export const Tag = ({ size = 'medium', color = 'ghost', className, href, children, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={classNames(styles.tag, className, {
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'
			})}
			{ ...props }
		>
			{
				href
					? <a href={href}>{ children }</a>
					:  <>{ children }</>
			}
		</div>
	)
}
