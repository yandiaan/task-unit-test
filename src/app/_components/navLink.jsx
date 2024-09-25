import React from 'react'
import cx from 'classnames';
import Link from 'next/link';

export default function NavLink({path, name, activePath, isScrolled}) {
  return (
    <li
      className={cx(
        { "text-black font-bold after:h-[3px] after:content-[' '] after:w-2/4 after:absolute after:bg-white after:-bottom-1 after:left-0": activePath === path },
        { "font-normal text-gray-500": activePath !== path },
        "relative dark:hover:text-black hover:font-bold border-black",
        isScrolled ? "text-black dark:text-white after:bg-black dark:after:bg-white" : "text-white dark:text-white",
      )}
    >
      <Link href={path}>{name}</Link>
    </li>
  )
}
