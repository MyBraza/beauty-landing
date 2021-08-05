import React, { FC, memo } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export interface INavOption {
  text: string
}

type TNavBarProps = {
  className?: string
  options: INavOption[]
}

const NavBar: FC<TNavBarProps> = memo(
  ({ className, options }: TNavBarProps) => {
    const optionItems = options.map((option, id) => (
      <NavLink to="#" key={id} className='flex items-center h-full hover:bg-gray-200 px-4 transition duration-300 ease-in-out' >
        {option.text}
      </NavLink>
    ))

    const defaultClassName = 'h-full'

    return (
      <div className={classNames(defaultClassName, className)}>
        <nav className="flex gap-8 h-full">
          {optionItems}
        </nav>
      </div>
    )
  }
)

NavBar.displayName = 'NavBar'

export default NavBar
