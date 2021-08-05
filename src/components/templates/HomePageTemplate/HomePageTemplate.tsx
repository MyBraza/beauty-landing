import React, { FC, memo } from 'react'
import { Banner } from '@components/organisms'
import { ImageBanner } from '@images'
import { Button } from '@components/molecules'
import { Heading, PlainText } from '@components/atoms'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => {
  return (
    <main>
      <Banner className="w-full h-96 lg:h-screen max-h-screen" image={ImageBanner}>
        <div className="flex flex-grow flex-col items-center px-6">
          <Heading className="text-white mb-3 lg:mb-24">
            Lorem ipsum dolor sit amet.
          </Heading>
          <PlainText className="text-white lg:w-1/2 mb-3 lg:mb-24">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            consequuntur cupiditate debitis, earum necessitatibus nostrum
            obcaecati officiis quaerat quas quos repudiandae, suscipit tempore?
            Distinctio ducimus iste, molestias officia rerum suscipit.
          </PlainText>
          <Button onClick={() => {}}>Записаться</Button>
        </div>
      </Banner>
    </main>
  )
})

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
