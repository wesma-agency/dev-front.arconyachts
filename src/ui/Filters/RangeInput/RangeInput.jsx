import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Handles, Rail, Tracks } from 'react-compound-slider'
import { color } from 'utils/vars'
import {
  StyledHandle,
  StyledInput,
  StyledInputPassive,
  StyledInputs,
  StyledInputWrapper,
  StyledLabel,
  StyledRail,
  StyledRailInner,
  StyledSlider,
  StyledTrack,
  StyledWrapper,
} from './RangeInput.styled'
import isEqual from 'lodash.isequal'
import { useTranslation } from 'utils/useTranslation'
import debounce from 'lodash.debounce'

const Handle = ({
  handle: { id, value, percent },
  getHandleProps,
  setDragged: setDraggedInput,
  dragged: draggedInput,
}) => {
  const [dragged, setDragged] = useState(false)
  const styles = useMemo(() => {
    const style = { left: `${percent}%` }

    return style
  }, [percent])
  useEffect(() => {
    setDraggedInput(dragged)
  }, [dragged])
  useEffect(() => {
    const up = () => setDragged(false)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [])
  const draggedStyle = {}
  if (dragged) {
    ;(draggedStyle.background = `${color.accentHover}`),
      (draggedStyle.borderColor = `${color.accentHover}`)
  }
  return (
    <StyledHandle
      style={styles}
      {...getHandleProps(id)}
      onMouseDown={(e) => {
        setDragged(true)
        getHandleProps(id).onMouseDown(e)
      }}
      onTouchStart={(e) => {
        setDragged(true)
        getHandleProps(id).onTouchStart(e)
      }}
    >
      <div style={draggedStyle} />
    </StyledHandle>
  )
}

const Track = ({ source, target, getTrackProps }) => (
  <StyledTrack
    style={{
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`,
    }}
    {...getTrackProps()}
  />
)

const RangeInput = ({
  className,
  min = 1900,
  max = 2100,
  unit = '',
  initValues,
  name: initName,
  onChange = () => {},
}) => {
  const [domain, setDomain] = useState({ min, max })
  const [dragged, setDragged] = useState(false)
  const [values, setValues] = useState(
    initValues ? { min: initValues.min, max: initValues.max } : { min, max }
  )
  const [inputValues, setInputValues] = useState(
    initValues ? { min: initValues.min, max: initValues.max } : { min, max }
  )
  useEffect(() => {
    if (domain.min !== min || domain.max !== max) {
      setDomain({ min, max })
      setValues({ min, max })
    }
  }, [min, max])
  useEffect(() => {
    if (!isEqual(values, initValues)) {
      setValues(initValues)
    }
  }, [initValues])
  useEffect(() => {
    setInputValues(values)
  }, [values])
  const onInputChange = (e) => {
    const value = e.target.value.replace(unit, '')
    const { name } = e.target
    if (!isNaN(value)) {
      setInputValues({ ...values, [name]: value })
      if (value >= domain.min && value <= domain.max) {
        setValues({ ...values, [name]: value })
      }
    }
  }

  const onBlur = (e) => {
    const value = e.target.value
    const { name } = e.target
    if (value < domain.min) {
      if (name === 'min') {
        setValues({ ...values, min: domain.min })
        onChange({ ...values, min: domain.min }, initName)
      } else if (name === 'max') {
        setValues({ ...values, max: values.min + 1 })
        onChange({ ...values, max: values.min + 1 }, initName)
      }
    } else if (value > domain.max) {
      if (name === 'max') {
        setValues({ ...values, max: domain.max })
        onChange({ ...values, max: domain.max }, initName)
      } else if (name === 'min') {
        setValues({ ...values, min: values.max - 1 })
        onChange({ ...values, min: values.max - 1 }, initName)
      }
    }
  }

  function getUnitBasedLength(length) {
    return unit === ' м'
      ? Number(length.toFixed(2))
      : unit === ' ft'
      ? Number(length.toFixed(3))
      : length
  }

  const handleUpdateValues = useCallback(
    debounce((e) => {
      const min = getUnitBasedLength(e[0])
      const max = getUnitBasedLength(e[1])
      setValues({ min, max })
    }, 20),
    []
  )

  const noop = () => {}
  return (
    <StyledWrapper className={className}>
      <StyledInputs>
        <StyledInputWrapper>
          <StyledLabel>{useTranslation('rangeInput').from}</StyledLabel>
          <StyledInput
            name="min"
            value={values.min}
            onChange={onInputChange}
            onBlur={onBlur}
            dragged={dragged && 'dragged'}
          />
          <StyledInputPassive
            name="min"
            value={values.min + unit}
            onChange={noop}
            dragged={dragged && 'dragged'}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel>{useTranslation('rangeInput').to}</StyledLabel>
          <StyledInput
            name="max"
            value={values.max}
            onChange={onInputChange}
            onBlur={onBlur}
            dragged={dragged && 'dragged'}
          />
          <StyledInputPassive
            name="max"
            value={values.max + unit}
            dragged={dragged && 'dragged'}
            onChange={noop}
          />
        </StyledInputWrapper>
      </StyledInputs>
      <StyledSlider
        domain={[domain.min, domain.max]}
        values={[values.min, values.max]}
        step={unit === ' м' ? 0.01 : unit === ' ft' ? 0.001 : 1}
        mode={0}
        onChange={(e) => {
          const min = getUnitBasedLength(e[0])
          const max = getUnitBasedLength(e[1])
          onChange({ min, max }, initName)
        }}
        onUpdate={handleUpdateValues}
      >
        <Rail>
          {({ getRailProps }) => (
            <StyledRail {...getRailProps()}>
              <StyledRailInner />
            </StyledRail>
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <>
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                  dragged={dragged}
                  setDragged={setDragged}
                />
              ))}
            </>
          )}
        </Handles>
        <Tracks right={false} left={false}>
          {({ tracks, getTrackProps }) => (
            <>
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </>
          )}
        </Tracks>
      </StyledSlider>
    </StyledWrapper>
  )
}

export default RangeInput
