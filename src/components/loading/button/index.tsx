import { PropsWithChildren } from 'react'

interface ButtonConfig extends PropsWithChildren {
  className?: string
  loading?: boolean
  onClick: (event: React.MouseEvent) => void
  /** loading圆圈的className，可以用来设置颜色、间距、大小 */
  circleClassName?: string
  /** loading圆圈的默认大小 */
  size?: 'large' | 'normal'
  disabled?: boolean
}

export const LoadingButton = (props: ButtonConfig) => {
  const size = props.size === 'large' ? 'w-3.5 h-3.5 mr-3' : 'w-2.5 h-2.5 mr-2'
  return (
    <button
      onClick={(event: React.MouseEvent) => {
        !props.loading && props.onClick(event)
      }}
      className={props.className}
      disabled={props.disabled}
    >
      <div className="flex justify-center items-center" style={{ width: '100%' }}>
        {props.loading && (
          <svg className={`animate-spin text-white ${size} ${props.circleClassName}`} fill="none" viewBox="0 0 24 24">
            <circle />
            <path
              className="opacity-1"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{props.children}</span>
      </div>
    </button>
  )
}