import React from 'react'
import { stickyNav } from '@/src/common/utilits'
import { useEffect } from 'react'
import DefaultHeader from './DefaultHeader'
import Header2 from './Header2'
import { LayoutProps } from '@/src/types/types'

const Header = ({
  header,
  transparent,
  headerTop,
  extraClass,
}: LayoutProps) => {
  useEffect(() => {
    stickyNav(extraClass)
  }, [])

  switch (header) {
    case 1:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      )

    case 2:
      return <Header2 transparent={transparent} />

    default:
      return (
        <DefaultHeader
          transparent={transparent}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      )
  }
}
export default Header
