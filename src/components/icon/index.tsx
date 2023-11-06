import classNames from 'classnames'
import styles from './index.module.scss'

interface Props {
  name: string
  size?: number
  color?: string
  className?: string
}

const Icon = ({ name, size, color, className }: Props) => (
  <svg className={classNames(styles.icon, className)} style={{ fontSize: size ?? 20, color }} aria-hidden="true">
    <use xlinkHref={name}></use>
  </svg>
)

export default Icon
