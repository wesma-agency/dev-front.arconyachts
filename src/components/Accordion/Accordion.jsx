import React, { useRef, memo } from 'react'
import { useSpoiler } from 'utils/useSpoiler'
import {
  Bar1,
  Bar2,
  StyledContent,
  StyledPlus,
  StyledSpoiler,
  StyledTitle,
  StyledTitleWrapper,
  StyledWrapper,
} from './Accordion.styled'
import isEqual from 'lodash.isequal'

const Accordion = ({
  title = 'Каким образом можно организовать питание и напитки на борту?',
  children,
  defaultOpened,
  ...props
}) => {
  const ref = useRef(null)
  const { closeMore, height, isOpened, openMore, toggleMore } = useSpoiler(
    ref,
    defaultOpened
  )
  return (
    <StyledWrapper {...props}>
      <StyledTitleWrapper onClick={toggleMore}>
        <StyledTitle>{title}</StyledTitle>
        {defaultOpened && (
          <StyledPlus isActive={isOpened && 'active'}>
            <Bar1 />
            <Bar2 />
          </StyledPlus>
        )}
      </StyledTitleWrapper>
      <StyledContent
        height={height}
        defaultOpened={!defaultOpened && 'defaultOpened'}
      >
        <StyledSpoiler ref={ref}>{children}</StyledSpoiler>
      </StyledContent>
    </StyledWrapper>
  )
}

export default memo(Accordion, (prev, next) => isEqual(prev, next))
