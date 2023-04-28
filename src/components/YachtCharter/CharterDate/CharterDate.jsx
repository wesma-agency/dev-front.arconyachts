import {
  addDays,
  addMonths,
  addYears,
  differenceInDays,
  startOfMonth,
} from 'date-fns'
import { enUS } from 'date-fns/locale'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import FeedbackModal from 'ui/Modals/FeedbackModal'
import ru from 'utils/dataLocale'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useModal } from 'utils/useModal'
import { useTranslation } from 'utils/useTranslation'
import { color } from 'utils/vars'
import {
  StyledArrow,
  StyledArrows,
  StyledButton,
  StyledCalendarWrapper,
  StyledHeader,
  StyledTitle,
  StyledWrapper,
} from './CharterDate.styled'
import { FormType } from 'utils/formType'

const CharterDate = ({ chooseDateRef }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const { notebook, tablet } = useBreakpoint()
  const [monthsCount, setMonthCount] = useState(3)
  useEffect(() => {
    if (tablet) {
      setMonthCount(1)
    } else if (notebook) {
      setMonthCount(2)
    } else {
      setMonthCount(3)
    }
  }, [notebook, tablet])

  const next = () =>
    setState((prev) => {
      const item = prev[0]
      const nextMonthStart = startOfMonth(addMonths(item.startDate, 1))
      const days = differenceInDays(nextMonthStart, new Date())
      return days < 365 && days > -1
        ? [
            {
              key: 'selection',
              startDate: nextMonthStart,
              endDate: nextMonthStart,
            },
          ]
        : prev
    })

  const prev = () =>
    setState((prev) => {
      const item = prev[0]
      let prevMonthCurrent = addMonths(item.startDate, -1)
      const days = differenceInDays(prevMonthCurrent, new Date())
      const dayOfMonth = new Date().getDate()

      if (dayOfMonth + days > 0 && days < -1) {
        prevMonthCurrent = addDays(prevMonthCurrent, dayOfMonth - 1)
        return [
          {
            key: 'selection',
            startDate: prevMonthCurrent,
            endDate: prevMonthCurrent,
          },
        ]
      }
      return days < 365 && days > -1
        ? [
            {
              key: 'selection',
              startDate: prevMonthCurrent,
              endDate: prevMonthCurrent,
            },
          ]
        : prev
    })
  const { openModal, closeModal, modalRef, isOpened } = useModal()
  const detailYachtStatic = useTranslation('detailYachtStatic')
  const { locale } = useRouter()
  return (
    <StyledWrapper ref={chooseDateRef}>
      {isOpened && (
        <FeedbackModal
          {...detailYachtStatic.datepicker.modal}
          ref={modalRef}
          closeModal={closeModal}
          formType={FormType.yachtBooking}
        />
      )}
      <StyledHeader>
        <StyledTitle>{detailYachtStatic.datepicker.title}</StyledTitle>
        <StyledArrows>
          <StyledArrow direction="back" onClick={prev} big="big" />
          <StyledArrow onClick={next} big="big" />
        </StyledArrows>
      </StyledHeader>
      <StyledCalendarWrapper>
        <DateRangePicker
          onChange={(item) => setState([item.selection])}
          showSelectionPreview={true}
          minDate={new Date()}
          maxDate={addYears(new Date(), 1)}
          staticRanges={[]}
          inputRanges={[]}
          showMonthAndYearPickers={false}
          showMonthArrow={false}
          showDateDisplay={false}
          monthDisplayFormat="MMMM"
          months={monthsCount}
          ranges={state}
          locale={locale === 'ru' ? ru : enUS}
          direction="horizontal"
          rangeColors={[color.accent]}
        />
      </StyledCalendarWrapper>
      <StyledButton onClick={openModal}>
        {detailYachtStatic.datepicker.button}
      </StyledButton>
    </StyledWrapper>
  )
}

export default CharterDate
