import React, { FC, memo, useState } from 'react'
import classNames from 'classnames'
import { BarsSolid } from '@images'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@components/molecules'

export interface INavOption {
  text: string
}

type TSideBarProps = {
  className?: string
  options: INavOption[]
}

const SideBar: FC<TSideBarProps> = memo(
  ({ className, options }: TSideBarProps) => {
    const [isSideBar, setIsSideBar] = useState<boolean>(false)

    const toggleSidebar = () => setIsSideBar(!isSideBar)

    const optionItems = options.map((option, id) => (
      <NavLink to="#" key={id} className='flex justify-end items-center w-full border-b-2 border-gray-300 h-16 hover:bg-gray-200 px-4'>
        {option.text}
      </NavLink>
    ))

    const defaultClassName = ''

    return (
      <div className={classNames(defaultClassName, className)}>
        <IconButton onClick={toggleSidebar} icon={BarsSolid}/>
        <div onClick={toggleSidebar} className='absolute top-0 left-0 w-screen h-screen z-40 bg-black opacity-20' style={!isSideBar ? { display: 'none'} : {}}/>
        <nav
          className="absolute right-0 top-0 z-50 flex flex-col py-5 bg-white w-64 h-screen transition-all duration-300 ease-in-out"
          style={!isSideBar ? { right: '-100%' } : {}}
        >
          <div className="flex justify-end px-4 mb-6">
            <IconButton onClick={toggleSidebar} icon={BarsSolid}/>
          </div>
          {optionItems}
        </nav>
      </div>
    )
  }
)

SideBar.displayName = 'SideBar'

export default SideBar
