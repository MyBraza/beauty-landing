import React, { FC, memo } from 'react'

type TFooterProps = {}

const Footer: FC<TFooterProps> = memo(() => {
  return (
    <footer className='flex justify-between items-center bg-black text-white px-24 lg:px-48 py-6'>
      <div>
        Lorem ipsum.
      </div>
      <div className='flex flex-col'>
        <div>Lorem ipsum.</div>
        <div>Lorem ipsum dolor.</div>
        <div>Lorem.</div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
