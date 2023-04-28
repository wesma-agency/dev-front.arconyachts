import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs'
import Footer from 'components/Footer'
import Header from 'components/Header'
// import InfoBlock from 'components/InfoBlock'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import Container from 'ui/Container'
// import Notification from 'ui/Modals/Notification'
import { currencyKey, lengthUnitKey } from 'utils/context/DataContext'
import { useShowCookies } from 'utils/useShowCookies'
import { media } from 'utils/vars'
import { FooterContext } from 'utils/context/FooterContext.js'
import dynamic from 'next/dynamic'

// Dynamic
const Notification = dynamic(() => import('ui/Modals/Notification'))
const InfoBlock = dynamic(() => import('components/InfoBlock'))

const AppWrapper = styled(Container)`
  padding-top: 100px;
  z-index: 1;
  overflow: hidden;

  ${media.notebook} {
    padding-top: 60px;
  }
`

const MainLayout = ({
  children,
  showInfo = true,
  breadcrumbsTitle,
  breadcrumbs = true,
  charterPage = false,
  infoContent,
  infoTitle,
  tags,
  smallIndent = false,
  showHeadquarter = true,
  isMain = false,
  epilogueText,
  footerItems,
  ...props
}) => {
  const { length, currency } = useSelector((state) => state)
  const {
    project,
    ['charter-week']: charterWeek,
    ['charter-day']: charterDay,
    sale,
  } = useSelector((state) => state.favorites)
  useEffect(() => {
    Cookies.set(lengthUnitKey, length)
  }, [length])
  useEffect(() => {
    Cookies.set(currencyKey, currency)
  }, [currency])
  useEffect(() => {
    Cookies.set('project', project)
  }, [project])
  useEffect(() => {
    Cookies.set('charter-week', charterWeek)
  }, [charterWeek])
  useEffect(() => {
    Cookies.set('charter-day', charterDay)
  }, [charterDay])
  useEffect(() => {
    Cookies.set('sale', sale)
  }, [sale])

  const { close, onButtonClick, showCookie } = useShowCookies()

  return (
    <>
      <Header />
      <AppWrapper {...props}>
        {breadcrumbs && (
          <Breadcrumbs
            title={breadcrumbsTitle}
            tags={tags}
            smallIndent={smallIndent}
          />
        )}
        {children}

        {showInfo && (
          <InfoBlock
            title={infoTitle}
            content={infoContent}
            epilogueText={epilogueText}
          />
        )}
      </AppWrapper>
      {footerItems ? (
        <FooterContext.Provider value={footerItems}>
          <Footer showHeadquarter={showHeadquarter && 'showHeadquarter'} />
        </FooterContext.Provider>
      ) : (
        <Footer showHeadquarter={showHeadquarter && 'showHeadquarter'} />
      )}
      {/* <Footer showHeadquarter={showHeadquarter && 'showHeadquarter'} /> */}
      {showCookie && (
        <Notification
          closeModal={onButtonClick}
          onButtonClick={onButtonClick}
          type={'cookie'}
        />
      )}
    </>
  )
}

export default MainLayout
