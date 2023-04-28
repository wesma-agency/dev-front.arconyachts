import LocationFilter from 'components/LocationFilter'
import LocationFilterMob from 'components/LocationFilter/LocationFilterMob'
import { useRouter } from 'next/router'
import { memo, useRef } from 'react'
import RangeInput from 'ui/Filters/RangeInput'
import Toggle from 'ui/Filters/Toggle'
import { useBreakpoint } from 'utils/useBreakpoint'
import { useSpoiler } from 'utils/useSpoiler'
import {
  StyledCheckbox,
  StyledFilterItem,
  StyledMore,
  StyledRadio,
  StyledSpoiler,
  StyledSpoilerWrapper,
} from './CatalogFilters.styled'
import { useTranslation } from 'utils/useTranslation'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import { lengthMap } from 'utils/lengthMap'

// Dynamic
// const StyledCheckbox = dynamic(() =>
//   import('./CatalogFilters.styled').then(({ StyledCheckbox }) => StyledCheckbox)
// )
// const StyledFilterItem = dynamic(() =>
//   import('./CatalogFilters.styled').then(
//     ({ StyledFilterItem }) => StyledFilterItem
//   )
// )
// const StyledRadio = dynamic(() =>
//   import('./CatalogFilters.styled').then(({ StyledRadio }) => StyledRadio)
// )
// const StyledSpoiler = dynamic(() =>
//   import('./CatalogFilters.styled').then(({ StyledSpoiler }) => StyledSpoiler)
// )
// const StyledSpoilerWrapper = dynamic(() =>
//   import('./CatalogFilters.styled').then(
//     ({ StyledSpoilerWrapper }) => StyledSpoilerWrapper
//   )
// )
// const StyledMore = dynamic(() =>
//   import('./CatalogFilters.styled').then(({ StyledMore }) => StyledMore)
// )

// Dynamic: END

const Spoiler = ({ children }) => {
  const ref = useRef(null)
  const { isOpened, toggleMore, height } = useSpoiler(ref)
  const spoilerStatic = useTranslation('yachtCatalogStatic')
  return (
    <>
      <StyledSpoilerWrapper height={height}>
        <StyledSpoiler ref={ref}>{children}</StyledSpoiler>
      </StyledSpoilerWrapper>
      <StyledMore onClick={toggleMore} height={height}>
        {isOpened ? spoilerStatic.spoiler.hide : spoilerStatic.spoiler.more}
      </StyledMore>
    </>
  )
}

const CatalogFilters = ({
  filters,
  more,
  filtersNumber,
  resetItem,
  onChange,
  getValue,
  setValues,
  isFilterDisabled = false,
  isItemDisabled = false,
  currentCompilation,
}) => {
  const { query: values, route } = useRouter()
  const checkSale = route.replace('/[slug]', '') === '/sale'
  const { length } = useSelector((state) => state)
  const { tablet } = useBreakpoint()
  const ref = useRef(null)

  const onRangedChange = (value, param) => {
    if (param === 'length') {
      setValues({
        ...values,
        [param]: `${value.min},${value.max},${length.slice(0, 1)}`,
      })
    } else {
      setValues({ ...values, [param]: `${value.min},${value.max}` })
    }
  }

  const currentFilters = more ? filters : filters.slice(0, filtersNumber)
  const rangeInput = useTranslation('rangeInput')

  return currentFilters
    .filter((item) => item.isMeta !== true)
    .map((item) => {
      if (item.type === 'range') {
        let vals = values[item.param]
        const value = vals?.split(',')
        let min = Number(item.min)
        let max = Number(item.max)
        if (value && value.length > 0) {
          min = +value[0]
          max = +value[1]
        }
        // min = min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        // max = max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        if (min === max) return null
        let minWithSpace = min.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        let maxWithSpace = max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        return (
          <StyledFilterItem
            key={item.title}
            title={item.title}
            activeTitle={
              vals &&
              (item.yearActiveTitle
                ? `${min} — ${max} ${item.unit}`
                : `${item.title} ${rangeInput.from} ${minWithSpace} ${item.unit} ${rangeInput.to} ${maxWithSpace} ${item.unit}`)
            }
            reset={() => resetItem(item.param)}
            rangeInput={true}
            isDisabled={isFilterDisabled}
          >
            <RangeInput
              unit={item.yearActiveTitle ? '' : item.unit}
              name={item.title}
              min={+item.min}
              max={+item.max}
              initValues={{ min: min, max: max }}
              onChange={(values) => onRangedChange(values, item.param)}
            />
          </StyledFilterItem>
        )
      } else if (item.type === 'checkbox' && item.items.length > 0) {
        let vals = values[item.param] || []
        if (!Array.isArray(vals)) {
          vals = [vals]
        }
        if (currentCompilation?.type === item.param) {
          vals = [values.slug, ...vals]
        }
        const getCheckboxes = (items) => {
          return items.map(
            (checkbox) =>
              checkbox?.name &&
              checkbox?.slug && (
                <StyledCheckbox
                  all={item}
                  isCompilation={filters.find(
                    (el) => el.slug === checkbox.slug
                  )}
                  item={checkbox}
                  key={checkbox.slug}
                  title={checkbox.name}
                  onChange={() =>
                    onChange({
                      param: item.param,
                      name: checkbox.slug,
                      type: 'checkbox',
                      isCompilation: checkbox.isCompilation,
                      ignoreCompilation: checkbox.ignoreCompilation,
                    })
                  }
                  value={
                    getValue({
                      param: item.param,
                      name: checkbox.slug,
                    }) || checkbox.slug === values.slug
                  }
                />
              )
          )
        }
        return (
          <StyledFilterItem
            key={item.title}
            title={item.title}
            activeTitle={
              vals.length > 0
                ? item.isSingleActive
                  ? vals.length === 1
                    ? item.items.filter((item) => item.slug === vals[0])?.[0]
                        ?.name
                    : `${item.activeTitle}`
                  : `${item.activeTitle}: ${vals.length}`
                : ''
            }
            reset={() => resetItem(item.param)}
            isDisabled={isFilterDisabled}
          >
            {item.items.length > 5 ? (
              <>
                {getCheckboxes(item.items.slice(0, 4))}
                <Spoiler>{getCheckboxes(item.items.slice(4))}</Spoiler>
              </>
            ) : (
              getCheckboxes(item.items)
            )}
          </StyledFilterItem>
        )
      } else if (item.type === 'location' && !checkSale) {
        let vals = values[item.param] || values.slug || []
        if (!Array.isArray(vals)) {
          vals = [vals]
        }
        // if (values.slug) {
        //   vals = [...vals, values.slug]
        // }
        const toggleLocation = ({ slug }) => {
          onChange({ param: item.param, name: slug, type: item.type })
        }
        let singleTitle = ''
        if (vals.length === 1) {
          let data = []
          item.items?.map((location) => {
            data.push(location)
            location.countries.map((country) => {
              data.push(country)
              country?.regions?.map((region) => {
                data.push(region)
              })
            })
          })
          let location = data.filter((location) => location.slug === vals[0])
          if (location.length < 1) {
            location = item.favorites
              .filter((item) => item.location.slug === vals[0])
              .map((item) => ({ title: item.name }))
          }
          singleTitle = location[0]?.title
        }
        return (
          <StyledFilterItem
            key={item.title}
            title={item.title}
            locationFilter={true}
            activeTitle={
              vals.length > 0
                ? vals.length === 1
                  ? singleTitle
                  : `${item.activeTitle}: ${vals.length}`
                : ''
            }
            reset={() => resetItem(item.param)}
            ref={ref}
            isDisabled={isFilterDisabled}
          >
            <LocationFilter
              filters={filters}
              activeLocations={vals}
              toggleLocation={toggleLocation}
              locations={item.items}
              favorites={item.favorites}
              menuRef={ref}
            />
            <LocationFilterMob
              locations={item.items}
              toggleLocation={toggleLocation}
              activeLocations={vals}
            />
          </StyledFilterItem>
        )
      } else if (item.type === 'toggle') {
        return (
          !tablet && (
            <Toggle
              key={item.title}
              quantity={item.quantity}
              name={item.title}
              checked={getValue({
                type: 'toggle',
                param: item.param,
                name: item.slug,
              })}
              onChange={() =>
                onChange({
                  type: 'toggle',
                  param: item.param,
                  name: item.slug,
                  ignoreCompilation: item.ignoreCompilation,
                })
              }
            />
          )
        )
      } else if (item.type === 'tag') {
        const value = { name: item.slug, param: item.param, type: 'tag' }
        const hasValue = getValue(value)

        return !tablet && hasValue ? (
          <Toggle
            key={item.title}
            quantity={false}
            name={item.title}
            checked={hasValue}
            onChange={() => onChange(value)}
          />
        ) : (
          ''
        )
      } else if (item.type === 'radio') {
        let vals =
          (!Array.isArray(values[item.param]) && values[item.param]) ||
          (item.defaultTitleValue ? item.items[0].slug : '')
        if (item.isCompilation && currentCompilation?.type === item.param) {
          vals = values.slug
        }

        const getRadioButtons = (items) => {
          return items.map(
            (radio) =>
              radio?.name &&
              radio?.slug && (
                <StyledRadio
                  isCompilation={filters.find((el) => {
                    return el.slug === (radio.compilationSlug || radio.slug)
                  })}
                  item={radio}
                  isActive={
                    radio.slug === vals || radio.compilationSlug === vals
                  }
                  title={radio.name}
                  key={radio.slug}
                  isItemDisabled={radio.slug === 'day' && isItemDisabled}
                  onChange={() =>
                    onChange({
                      name: radio.slug,
                      param: item.param,
                      type: 'radio',
                      isCompilation: item.isCompilation,
                      compilationSlug: radio.compilationSlug,
                    })
                  }
                />
              )
          )
        }
        return (
          <StyledFilterItem
            key={item.title}
            title={
              item.defaultTitleValue
                ? item.items.filter((item) => item.slug === vals)?.[0]?.name
                : item.title
            }
            activeTitle={
              !item.defaultTitleValue &&
              (values[item.param] ||
                currentCompilation?.slug === vals ||
                lengthMap[values.slug] === currentCompilation?.slug)
                ? vals.length > 0
                  ? item.items.filter((item) => {
                      return (
                        item.slug === vals ||
                        item.compilationSlug === vals ||
                        lengthMap[currentCompilation?.slug] === item.slug
                      )
                    })?.[0]?.name
                  : ''
                : ''
            }
            reset={() => resetItem(item.param)}
            isDisabled={isFilterDisabled}
            isItemDisabled={isItemDisabled}
          >
            {getRadioButtons(item.items)}
          </StyledFilterItem>
        )
      }
    })
}

export default memo(CatalogFilters)
