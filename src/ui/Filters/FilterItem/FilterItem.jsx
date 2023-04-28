import { forwardRef, memo, useRef, useState, useEffect } from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useClickOutside } from 'utils/useClickOutside'
import {
  StyledArrow,
  StyledClose,
  StyledFilter,
  StyledFilterDrop,
  StyledTitle,
} from './FilterItem.styled'
const FilterItem = forwardRef(
  (
    {
      title,
      activeTitle,
      reset,
      children,
      rangeInput = false,
      portalRef,
      locationFilter = false,
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    const [isOpened, setIsOpened] = useState(false)
    const { tablet } = useBreakpoint()
    const filterRef = useRef(null)

    useClickOutside([filterRef], () => {
      !tablet && setIsOpened(false)
    })
    useEffect(() => {
      if (tablet) {
        setIsOpened(true)
      } else {
        setIsOpened(false)
      }
    }, [tablet])
    return (
      <StyledFilter
        onClick={() => {
          !tablet && !isDisabled && setIsOpened(!isOpened)
        }}
        isDisabled={isDisabled}
        isOpened={isOpened}
        isActive={activeTitle}
        ref={(element) => {
          if (element) {
            filterRef.current = element
            if (ref) {
              ref.current = element
            }
          }
        }}
        locationFilter={locationFilter}
        {...props}
      >
        {activeTitle && !tablet ? (
          <>
            {activeTitle}
            <StyledClose
              onClick={(e) => {
                e.stopPropagation()
                reset()
                setIsOpened(false)
              }}
            />
          </>
        ) : (
          <>
            <StyledTitle>{title}</StyledTitle>
            <StyledArrow
              isActive={isOpened}
              onClick={() => setIsOpened(false)}
            />
          </>
        )}
        {isOpened && (
          <StyledFilterDrop
            locationFilter={locationFilter && 'location'}
            rangeInput={rangeInput && 'range'}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </StyledFilterDrop>
        )}
      </StyledFilter>
    )
  }
)

export default memo(FilterItem)
