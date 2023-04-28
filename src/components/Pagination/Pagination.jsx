import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { color, trans } from 'utils/vars'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from 'redux/slices/filterSlice'

import Arrow from 'components/Slider/Arrow'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const StyledArrows = styled.div`
  display: flex;
  margin-top: 40px;
`

export const StyledArrow = styled(Arrow)`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  ${({ smallIndent }) =>
    smallIndent &&
    css`
      margin-top: 4px;
    `}
`
const StyledPage = styled.a`
  opacity: 0.4;
  transition: ${trans.base} opacity, ${trans.base} color;
  margin-right: 20px;
  display: block;
  cursor: pointer;

  &:hover {
    color: ${color.accentHover};
    opacity: 1;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      color: ${color.black};

      &:hover {
        opacity: 1;
        color: ${color.black};
      }
    `}
`
const LEFT_PAGE = 'left'
const RIGHT_PAGE = 'right'

const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

const Pagination = ({
  totalPages = 0,
  pageNeighbours = 1,
  smallIndent = false,
  pathname,
}) => {
  const router = useRouter()
  const { query } = router
  const currentPage = +query.page || 1

  const getQuery = (page) => {
    let newQuery = { ...query }
    if (page > 1) {
      newQuery.page = +page
    } else {
      delete newQuery.page
    }
    return newQuery
  }

  const renderPages = () => {
    const totalNumbers = pageNeighbours * 2 + 1 // 5
    const totalBlocks = totalNumbers + 4

    if (totalPages > totalBlocks) {
      let pages = []

      const leftBound = currentPage - pageNeighbours
      const rightBound = currentPage + pageNeighbours
      const beforeLastPage = totalPages - 2

      const startPage = leftBound > 3 ? leftBound : 3
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage

      pages = range(startPage, endPage)

      const pagesCount = pages.length
      const singleSpillOffset = totalNumbers - pagesCount - 2

      const leftSpill = startPage > 3
      const rightSpill = endPage < beforeLastPage

      const leftSpillPage = LEFT_PAGE
      const rightSpillPage = RIGHT_PAGE

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1)
        pages = [leftSpillPage, ...extraPages, ...pages]
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset)
        pages = [...pages, ...extraPages, rightSpillPage]
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage]
      }

      return [1, 2, ...pages, totalPages - 1, totalPages]
    }

    return range(1, totalPages)
  }
  return (
    <>
      <StyledWrapper smallIndent={smallIndent && 'smallIndent'}>
        {renderPages().map((page, i) => (
          <Link prefetch={false} 
            href={{
              pathname,
              query: getQuery(
                typeof page === 'number'
                  ? page
                  : page === RIGHT_PAGE
                  ? currentPage + pageNeighbours * 2
                  : currentPage - pageNeighbours * 2
              ),
            }}
            passHref
            key={page}
            scroll={true}
          >
            <StyledPage isActive={page === currentPage && 'active'}>
              {typeof page === 'number'
                ? page < 10
                  ? `0${page}`
                  : page
                : (page === LEFT_PAGE || page === RIGHT_PAGE) && '...'}
            </StyledPage>
          </Link>
        ))}
      </StyledWrapper>

      <StyledArrows>
        <Link prefetch={false}  href={{ pathname, query: getQuery(currentPage - 1) }} passHref>
          <StyledArrow direction="back" isLink />
        </Link>
        <Link prefetch={false} 
          href={{
            pathname,
            query: getQuery(
              currentPage < totalPages ? currentPage + 1 : currentPage
            ),
          }}
          passHref
        >
          <StyledArrow isLink />
        </Link>
      </StyledArrows>
    </>
  )
}

export default Pagination
