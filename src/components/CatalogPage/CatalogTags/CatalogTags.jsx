import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValues } from 'redux/slices/filterSlice'
import { toggleParam } from 'utils/paramsHelpers'
import { v4 } from 'uuid'
import {
  StyledCount,
  StyledDivider,
  StyledPlaceholder,
  StyledTags,
  StyledTagWrapper,
  StyledTitle,
} from './CatalogTags.styled'
import { useRouter } from 'next/router'

const CatalogTags = ({ tags, onClick }) => {
  const router = useRouter()
  return (
    tags &&
    tags.length > 0 && (
      <StyledTags>
        {tags.map((tag, i) => {
          const link = [
            router.locale === 'ru' ? '/ru' : '',
            router.route.replace('/[slug]', ''),
            '/',
            tag.slug,
          ].join('')
          const clickHandler = (e) => e.preventDefault()
          return (
            <StyledTagWrapper
              onClick={() => {
                console.log(tag.param)
                onClick({ type: 'tag', name: tag.slug, param: tag.param })
              }
              }
              key={tag.slug || v4()}
            >
              <StyledTitle href={link} onClick={clickHandler}>
                {tag.name || tag.title}
              </StyledTitle>
              {(tag.count_shipyards || tag.count) && (
                <>
                  <StyledDivider />
                  <StyledCount>{tag.count_shipyards || tag.count}</StyledCount>
                </>
              )}
            </StyledTagWrapper>
          )
        })}
        <StyledPlaceholder />
        <StyledPlaceholder />
        <StyledPlaceholder />
        <StyledPlaceholder />
      </StyledTags>
    )
  )
}

export default CatalogTags
