import React, { FC } from 'react'
import classNames from 'classnames'

type THeadingProps = { children: string; className?: string }

const Heading: FC<THeadingProps> = ({ children, className }: THeadingProps) => {
  const defaultClassName = 'text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold select-none'
  return <h1 className={classNames(defaultClassName, className)}>{children}</h1>
}

Heading.displayName = 'Heading'

export default Heading
