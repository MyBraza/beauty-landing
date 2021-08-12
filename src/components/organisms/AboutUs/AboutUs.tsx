import { Heading, PlainText } from '@components/atoms'
import React, { FC, memo } from 'react'

type TAboutUsProps = {
  children: string
  tittle:string
}

const AboutUs: FC<TAboutUsProps> = memo(({ tittle, children }: TAboutUsProps) => {
  return (
    <div className='flex flex-col flex-grow items-center px-2 py-20'>
      <Heading className='mb-10'>{tittle}</Heading>
      <PlainText className='font-bold'>{children}</PlainText>
    </div>
  )
})

AboutUs.displayName = 'AboutUs'

export default AboutUs
