import React, { FC, memo } from 'react'
import { Image } from '@components/atoms'
import { LogoBlack } from '@images'
import ReactSwitch from 'react-switch'
import { NavBar, SideBar } from '@components/organisms'
import { HeaderItems } from '@config'

type THeaderProps = {}

const Header: FC<THeaderProps> = memo(() => (
  <>
    <div className="fixed flex flex-grow justify-between items-center z-40 shadow h-20 min-w-full px-3 bg-white">
      <div className="w-36">
        <Image src={LogoBlack} alt="Logo" className="" width={1750} />
      </div>
      <NavBar
        className='hidden lg:flex'
        options={HeaderItems}
      />
      <label className="hidden lg:flex justify-end w-36">
        <ReactSwitch
          checked={false}
          onChange={() => {console.log('click')}}
          height={20}
          width={40}
        />
      </label>
      <SideBar
        className='lg:hidden'
        options={HeaderItems}
      />
    </div>
    <div className="mb-20" />
  </>
))

Header.displayName = 'Header'

export default Header
