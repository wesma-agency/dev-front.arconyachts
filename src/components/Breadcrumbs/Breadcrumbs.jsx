import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import OvalButton from 'ui/Buttons/OvalButton'
import { useTranslation } from 'utils/useTranslation'
import {
  Links,
  StyledDivider,
  StyledLink,
  StyledWrapper,
  TagsWrapper,
} from 'components/Breadcrumbs/Breadcrumbs.styled'

const Breadcrumbs = ({ title, tags, smallIndent }) => {
  const breadcrumbsStatic = useTranslation('breadcrumbsStatic')
  const mapSlugToTitle = breadcrumbsStatic.mapSlugToTitle
  const { asPath } = useRouter()
  const breadcrumbs = [
    { title: breadcrumbsStatic.main, href: '/' },
    ...asPath
      .split('?')[0]
      .split('/')
      .filter((item) => mapSlugToTitle[item])
      .map((item) => mapSlugToTitle[item]),
  ]
  if (title) breadcrumbs.push({ title, href: asPath })
  return (
    <StyledWrapper smallIndent={smallIndent && 'smallIndent'}>
      <Links>
        {breadcrumbs.map((item, i) => (
          <Fragment key={item.href}>
            <StyledLink
              prefetch={false}
              href={item.href}
              isActive={i === breadcrumbs.length - 1 && 'active'}
              passHref={i !== breadcrumbs.length - 1}
            >
              {item.title}
            </StyledLink>
            {i < breadcrumbs.length - 1 && <StyledDivider>/</StyledDivider>}
          </Fragment>
        ))}
      </Links>
      {tags && (
        <TagsWrapper>
          {tags.map((tag) => (
            <Link
              prefetch={false}
              key={tag.slug}
              href={{
                pathname: tag.pathname,
                query: { [tag.param]: tag.slug },
              }}
              passHref
            >
              <OvalButton isLink>{tag.title}</OvalButton>
            </Link>
          ))}
        </TagsWrapper>
      )}
    </StyledWrapper>
  )
}

export default Breadcrumbs
