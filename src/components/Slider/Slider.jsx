import React, { forwardRef } from 'react'
import Swiper from 'react-id-swiper'
import { breakpoints } from 'utils/vars'

const Slider = forwardRef(({ children, params, ...props }, ref) => {
  const initParams = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    slideToClickedSlide: true,
    ...params,
    breakpoints: {
      [breakpoints.tablet + 1]: { spaceBetween: 40 },
      [breakpoints.fullhd + 1]: {
        spaceBetween: 60,
      },
      ...params?.breakpoints,
    },
  }
  return (
    <Swiper shouldSwiperUpdate={true} {...initParams} {...props} ref={ref}>
      {children}
    </Swiper>
  )
})

export default Slider
