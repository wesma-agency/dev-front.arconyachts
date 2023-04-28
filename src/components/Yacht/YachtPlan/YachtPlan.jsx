import ArrowIcon from 'assets/icons/arrow.svg'
import React, { createRef, useEffect, useMemo, useState } from 'react'
import { useHorizontalScroll } from 'utils/useHorizontalScroll'
import { useTranslation } from 'utils/useTranslation'
import {
  ScrollOverlay,
  ScrollOverlayRight,
  StyledContentWrapper,
  StyledImageWrapper,
  StyledTab,
  StyledTabContent,
  StyledTabsWrapper,
  StyledTitle,
  StyledUnderline,
  StyledWrapper,
  Tabs,
} from './YachtPlan.styled'
import Image from 'next/image'

const YachtPlan = ({ planRef, images }) => {
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const tabs = useMemo(
    () =>
      images.map((tab) => {
        const properties = JSON.parse(tab.properties)
        return {
          id: tab.id,
          title: properties.button_text,
          render: () => (
            <StyledTabContent>
              <StyledImageWrapper>
                <Image
                  src={tab.fullpath}
                  layout="responsive"
                  height={1080}
                  width={1920}
                  alt={properties.button_text}
                />
              </StyledImageWrapper>

              {properties.description && (
                <StyledContentWrapper>
                  {properties.description}
                </StyledContentWrapper>
              )}
            </StyledTabContent>
          ),
        }
      }),
    [images]
  )

  const [tab, setTab] = useState(tabs[0].id)
  useEffect(() => {
    setTab(tabs[0].id)
  }, [tabs])

  const {
    leftClick,
    rightClick,
    tabsWrapper,
    wrapperRef,
    showScrollFade,
    onScroll,
  } = useHorizontalScroll()

  const activeTab = tabs.filter((item) => item.id === tab)[0]
  return (
    <StyledWrapper
      ref={(ref) => {
        if (ref) {
          if (planRef) {
            planRef.current = ref
          }
          wrapperRef.current = ref
        }
      }}
    >
      <StyledTitle>{detailYachtStatic.plan.title}</StyledTitle>
      <Tabs>
        <ScrollOverlay
          show={showScrollFade?.left && 'show'}
          onClick={leftClick}
        >
          <ArrowIcon />
        </ScrollOverlay>
        <ScrollOverlayRight
          show={showScrollFade?.right && 'show'}
          onClick={rightClick}
        >
          <ArrowIcon />
        </ScrollOverlayRight>

        {tabs.length > 1 && (
          <StyledTabsWrapper ref={tabsWrapper} onScroll={onScroll}>
            {tabs.map((item) => {
              const ref = createRef()
              return (
                <StyledTab
                  ref={ref}
                  key={`${item.id}-${item.title}`}
                  onClick={() => {
                    setTab(item.id)
                    tabsWrapper.current.scrollTo({
                      left:
                        ref.current.offsetLeft +
                        ref.current.offsetWidth / 2 -
                        tabsWrapper.current.offsetWidth / 2,
                      behavior: 'smooth',
                    })
                  }}
                >
                  {item.title}
                  <StyledUnderline isActive={item.id === tab} />
                </StyledTab>
              )
            })}
          </StyledTabsWrapper>
        )}

      </Tabs>
      {activeTab && activeTab.render()}
    </StyledWrapper>
  )
}

export default YachtPlan
