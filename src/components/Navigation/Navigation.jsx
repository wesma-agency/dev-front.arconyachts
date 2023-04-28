import Arrow from 'components/Slider/Arrow'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import getCoords from 'utils/getCoords'
import SmoothScrolling from 'utils/scrollTo'
import throttle from 'utils/throttle'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  StyledArrows,
  StyledNavTitle,
  StyledTab,
  StyledTabs,
  StyledTabsWrapper,
  StyledNavSubtitle,
} from '../DetailHeader/DetailHeader.styled'

const Navigation = ({
  tabs,
  goNext,
  goPrev,
  title,
  subtitle,
  detectActive = true,
  isBuilding = false,
  isArrowsShown = true,
}) => {
  const [init, setInit] = useState(0)
  const [activeTab, setActiveTab] = useState(null)
  const wrapper = useRef(null)
  const { notebook } = useBreakpoint()
  const footer = useRef(null)
  useEffect(() => {
    footer.current = getCoords(document.querySelector('footer')).top
  }, [])
  const detectActiveTab = useCallback(() => {
    for (let i = tabs.length - 1; i >= 0; i--) {
      const ref = tabs[i].ref
      if (window.pageYOffset > getCoords(ref.current).top - 200) {
        setActiveTab(i)
        const lastBlock = tabs[tabs.length - 1].ref.current.parentElement
        if (
          window.pageYOffset >
          getCoords(lastBlock).top + lastBlock.offsetHeight - 200
        ) {
          setActiveTab(null)
        }
        return i
      }
      setActiveTab(null)
    }
  }, [tabs])

  useEffect(() => {
    const onScroll = (e) => {
      if (!notebook) {
        detectActive && throttle(detectActiveTab(), 100)
        if (init && window.pageYOffset < init) {
          wrapper.current.classList.remove('sticky')
          setInit(0)
          return
        }

        if (window.pageYOffset > footer.current - 100) {
          wrapper.current.classList.add('sticky-hide')
        } else {
          wrapper.current.classList.remove('sticky-hide')
        }

        const top = getCoords(wrapper.current).top - 70
        if (window.pageYOffset >= top) {
          if (!init && !wrapper.current.classList.contains('sticky')) {
            setInit(top)
          }
          wrapper.current.classList.add('sticky')
        }
      } else {
        wrapper.current.classList.remove('sticky')
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [init, notebook, tabs])
  return (
    <StyledTabsWrapper ref={wrapper} isBuilding={isBuilding}>
      {isArrowsShown && (
        <StyledArrows>
          <Arrow direction="back" onClick={goPrev} big="big" />
          <Arrow onClick={goNext} big="big" />
        </StyledArrows>
      )}
      <StyledNavTitle>
        <div>{title}</div>
        {subtitle && <StyledNavSubtitle>{subtitle}</StyledNavSubtitle>}
      </StyledNavTitle>
      <StyledTabs>
        {tabs.map((tab, i) => (
          <StyledTab
            key={tab.title}
            isActive={i === activeTab && 'active'}
            onClick={() => {
              SmoothScrolling.scrollTo(tab?.ref?.current, 193)
            }}
          >
            {tab.title}
          </StyledTab>
        ))}
      </StyledTabs>
    </StyledTabsWrapper>
  )
}

export default Navigation
