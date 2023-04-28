import Pagination from 'components/Pagination'
import { PATH } from 'config/path'
import { useRouter } from 'next/router'
import React from 'react'
import { useBreakpoint } from 'utils/useBreakpoint'
import {
  ListWrapper,
  Placeholder,
  StyledButton,
  StyledCard,
  Wrapper,
} from './NewsList.styled'
import { useTranslation } from 'utils/useTranslation'

const NewsList = ({ list, pagination, total }) => {
  const { tablet: isTablet } = useBreakpoint()
  const router = useRouter()
  const { query } = router
  const currentPage = +query.page || 1
  const setCurrentPage = (page) => {
    let newQuery = { ...query }
    if (page > 1) {
      newQuery.page = page
    } else {
      delete newQuery.page
    }
    router.push({ pathname: PATH.NEWS, query: newQuery }, undefined, {
      shallow: true,
    })
  }
  const newsStatic = useTranslation('newsStatic')
  return (
    <Wrapper>
      <ListWrapper>
        {list.map((news, index) => (
          <StyledCard key={news.slug} {...news} withIndent />
        ))}
        <Placeholder />
        <Placeholder />
      </ListWrapper>
      {isTablet && pagination && total > 1 && currentPage !== total && (
        <StyledButton onClick={() => setCurrentPage(currentPage + 1)}>
          {`${newsStatic.more.pre} 6 ${newsStatic.more.after}`}
        </StyledButton>
      )}
      {!isTablet && pagination && total > 1 && (
        <Pagination totalPages={total} pathname={PATH.NEWS} />
      )}
    </Wrapper>
  )
}
export default NewsList
