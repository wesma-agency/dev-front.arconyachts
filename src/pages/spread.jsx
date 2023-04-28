import React from 'react'
import MainLayout from 'layouts/MainLayout'
import Link from 'ui/Link'
import styled from 'styled-components'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { homeStatic } from 'config/static/home'
import { getTranslations } from 'utils/translationHelpers'
import { notificationStatic } from 'config/static/notification'
import { initializeApollo } from 'graphql/apollo'
import { REVALIDATE_INTERVAL } from 'utils/vars'
import { getFooterData } from 'utils/getFooterData'

const StyledLink = styled(Link)`
  font-size: 20px;
  margin: 10px 0;
`

const Spread = ({ footerItems }) => {
  return (
    <MainLayout footerItems={footerItems}>
      <StyledLink prefetch={false} href="/">
        Главная
      </StyledLink>
      <StyledLink prefetch={false} href="/catalog">
        Продажа яхт - каталог
      </StyledLink>
      <StyledLink prefetch={false} href="/catalog/1">
        Продажа яхт - детальная
      </StyledLink>
      <StyledLink prefetch={false} href="/charter">
        Аренда яхт - каталог
      </StyledLink>
      <StyledLink prefetch={false} href="/charter/1">
        Аренда яхт - детальная
      </StyledLink>
      <StyledLink prefetch={false} href="/shipyards">
        Верфи - каталог
      </StyledLink>
      <StyledLink prefetch={false} href="/shipyard/1">
        Верфь - детальная
      </StyledLink>
      <StyledLink prefetch={false} href="/building">
        Строительство
      </StyledLink>
      <StyledLink prefetch={false} href="/projects">
        Проекты
      </StyledLink>
      <StyledLink prefetch={false} href="/news">
        Новости - разводящая
      </StyledLink>
      <StyledLink prefetch={false} href="/news/1">
        Новости - детальная
      </StyledLink>
      <StyledLink prefetch={false} href="/service">
        Сервис - разводящая
      </StyledLink>
      <StyledLink prefetch={false} href="/service/management">
        Сервис - менеджмент
      </StyledLink>
      <StyledLink prefetch={false} href="/service/registration">
        Сервис - регистрация
      </StyledLink>
      <StyledLink prefetch={false} href="/service/dock">
        Сервис - стоянка
      </StyledLink>
      <StyledLink prefetch={false} href="/service/transportation">
        Сервис - доставка
      </StyledLink>
      <StyledLink prefetch={false} href="/about">
        О нас
      </StyledLink>
      <StyledLink prefetch={false} href="/favorites">
        Избраное
      </StyledLink>
      <StyledLink prefetch={false} href="/contacts">
        Контакты
      </StyledLink>
      <StyledLink prefetch={false} href="/policy">
        Политика конфиденциальности
      </StyledLink>
      <StyledLink prefetch={false} href="/404">
        404
      </StyledLink>
      <StyledLink prefetch={false} href="/sitemap">
        Sitemap
      </StyledLink>
    </MainLayout>
  )
}

Spread.translation = {
  ...getTranslations({
    headerStatic: headerStatic,
    homeStatic: homeStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    contactsStatic: contactsStatic,
    notificationStatic: notificationStatic,
  })
}

export async function getStaticProps(ctx) {
  const apolloClient = initializeApollo(ctx)
  const footerItems = await getFooterData(apolloClient)

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
    revalidate: REVALIDATE_INTERVAL,
  }
}

export default Spread
