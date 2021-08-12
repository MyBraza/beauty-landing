import React, { FC, memo } from 'react'
import { Heading, PlainText } from '@components/atoms'
import { Button } from '@components/molecules'
import { Banner } from '@components/organisms'

type THeroBannerProps = {
  title: string
  children: string
  buttonText: string
  buttonOnClick: () => void
  image: string
}

const HeroBanner: FC<THeroBannerProps> = memo(
  ({ title, buttonText, buttonOnClick, image, children }: THeroBannerProps) => {
    return (
      <Banner className="w-full h-96 lg:h-screen max-h-screen" image={image}>
        <div className="flex flex-grow flex-col items-center px-6">
          <Heading className="text-white text-center mb-3 lg:mb-24">{title}</Heading>
          <PlainText className="text-white font-bold lg:w-1/2 mb-3 lg:mb-24">
            {children}
          </PlainText>
          <Button onClick={buttonOnClick}>{buttonText}</Button>
        </div>
      </Banner>
    )
  }
)

HeroBanner.displayName = 'HeroBanner'

export default HeroBanner
