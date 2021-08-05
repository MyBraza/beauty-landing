import React, { FC } from 'react'
import classNames from 'classnames'
import { TTextContent } from '@config'
import { useSelector } from 'react-redux'
import { getLanguageSelector } from '@store/selectors'

type TPlainTextProps = { children: TTextContent | string; className?: string }

const PlainText: FC<TPlainTextProps> = ({
  children,
  className
}: TPlainTextProps) => {
  const defaultClassName = 'text-base md:text-lg lg:text-xl text-justify'

  const language = useSelector(getLanguageSelector)

  return (
    <p className={classNames(defaultClassName, className)}>
      {typeof children === 'string' ? children : children[language]}
    </p>
  )
}

PlainText.displayName = 'PlainText'

export default PlainText
