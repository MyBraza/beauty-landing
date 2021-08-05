import React, { FC, memo } from 'react'
import classNames from 'classnames'

type TButtonProps = {
  onClick: () => void
  className?: string
  children: string
}

const Button: FC<TButtonProps> = memo(
  ({ onClick, className, children }: TButtonProps) => {
    const defaultClassName = 'px-8 py-4 bg-purple-500 rounded-md text-white hover:bg-purple-300'
    return (
      <button onClick={onClick} className={classNames(defaultClassName, className)}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
