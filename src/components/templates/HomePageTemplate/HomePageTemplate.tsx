import React, { FC, memo } from 'react'
import { AboutUs, HeroBanner } from '@components/organisms'
import { HeroImage } from '@images'

type THomePageTemplateProps = {}

const HomePageTemplate: FC<THomePageTemplateProps> = memo(() => {
  return (
    <main>
      <HeroBanner
        title="Lorem ipsum dolor sit amet."
        buttonText="Записаться"
        buttonOnClick={() => {}}
        image={HeroImage}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        consequuntur cupiditate debitis, earum necessitatibus nostrum obcaecati
        officiis quaerat quas quos repudiandae, suscipit tempore? Distinctio
        ducimus iste, molestias officia rerum suscipit.
      </HeroBanner>
      <AboutUs tittle='О нас'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
        architecto blanditiis, culpa eum, exercitationem harum laboriosam minima
        obcaecati odit pariatur quas, ullam vel. Dolorum eos provident quam
        saepe similique veniam.
      </AboutUs>
    </main>
  )
})

HomePageTemplate.displayName = 'HomePageTemplate'

export default HomePageTemplate
