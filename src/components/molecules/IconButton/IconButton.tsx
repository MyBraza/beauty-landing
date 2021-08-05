import React, { FC, memo } from 'react'

type TIconButtonProps = { onClick: () => void, icon: FC<IconProps> }

interface IconProps {
  style?: { [key: string]: string }
  className?: string
}

const IconButton: FC<TIconButtonProps> = memo(
  ({ onClick, icon }: TIconButtonProps) => {
    const Icon = icon
    return (<div
      onClick={onClick}
      className="flex justify-center cursor-pointer p-1 w-10 h-10 hover:bg-gray-300 rounded-md transition duration-200 ease-in-out"
    >
      <Icon className="fill-current text-black" />
    </div>)
  }
)

IconButton.displayName = 'IconButton'

export default IconButton
