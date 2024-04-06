import React from 'react'
import { useEffect } from 'react'
import {
  accordion,
  milButtonClick,
  milButtonClick2,
} from '@/src/common/utilits'
import Footer from './footers/Index'
import Header from './headers/Index'

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  transparent,
  headerTop,
  extraClass,
}: any) => {
  useEffect(() => {
    milButtonClick()
    milButtonClick2()
    accordion()
  }, [])

  return (
    <div className="mil-wrapper">
      {!noHeader && (
        <Header
          header={header}
          transparent={transparent}
          headerTop={headerTop}
          extraClass={extraClass}
        />
      )}
      {children}
      {!noFooter && <Footer footer={footer} />}
    </div>
  )
}
export default Layouts
