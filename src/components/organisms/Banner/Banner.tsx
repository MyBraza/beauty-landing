import React, { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'
import { Image } from '@components/atoms'

type TBannerProps = {
  image: string
  className?: string
  children?: ReactNode
}

const Banner: FC<TBannerProps> = memo(
  ({ image, className, children }: TBannerProps) => {
    const defaultClassName = 'relative'

    return (
      <div className={classNames(defaultClassName, className)}>
        <Image
          src={image}
          alt="banner"
          className="absolute w-full h-full object-cover"
          width={1920}
        />
        <div className="absolute flex flex-grow justify-center items-center h-full w-full bg-black bg-opacity-50 bg-center">
          {children}
        </div>
      </div>
    )
  }
)

Banner.displayName = 'Banner'

export default Banner
