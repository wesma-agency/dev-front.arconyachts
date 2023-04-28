import { useQuery } from '@apollo/client'
import DetailHeader from 'components/DetailHeader'
import { transformBenefits } from 'components/Yacht/Yacht'
import YachtAbout from 'components/Yacht/YachtAbout'
import YachtConsult from 'components/Yacht/YachtConsult'
import YachtService from 'components/Yacht/YachtService'
import YachtSpecifications from 'components/Yacht/YachtSpecifications'
import { initializeApollo } from 'graphql/apollo'
import { GET_YACHT_PRINT } from 'graphql/query/Yacht_Print'
import { useRouter } from 'next/router'
import NotFound from 'pages/404'
import { rgba } from 'polished'
import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { typography } from 'utils/mixins'
import { transformYacht } from 'utils/transformYacht'
import { useTranslation } from 'utils/useTranslation'
import { color } from 'utils/vars'
import { headerStatic } from 'config/static/header'
import { breadcrumbsStatic } from 'config/static/breadcrumbs'
import { footerStatic } from 'config/static/footer'
import { contactsStatic } from 'config/static/contacts'
import { detailHeaderStatic } from 'config/static/detailHeader'
import { detailYachtStatic } from 'config/static/detailYacht'
import { feedbackFormStatic } from 'config/static/feedbackForm'
import { getTranslations } from 'utils/translationHelpers'
import { spoilerStatic } from 'config/static/spoiler'
import { notFoundStatic } from 'config/static/notFound'
import { getFooterData } from 'utils/getFooterData'

/* Image in base64 because php dev server hangs up completely when it is in /public folder */
const IMG_LOGO =
  'data:image/png;base64,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'

const Page = styled.section`
  page-break-before: always;
  padding: 0 4rem;
  &:last-child {
    padding-bottom: 20rem;
    border: 1px solid red;
  }
`

const StyledContainer = styled.div`
  padding: 0 4rem;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 24rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 100%;

  height: 16rem;
  background-position: center center;
  background-size: 110%;
  background-repeat: no-repeat;

  margin: 0.4rem;
  float: left;
`

const Title = styled.h2`
  font-family: sangbleusunrise;
  font-size: 3rem;
  font-weight: normal;
  padding-top: 3rem;
`

const AboutWrapper = styled(Wrapper)`
  & > div {
    margin-top: 4rem;
    width: 32%;
  }
`

const AboutText = styled.div`
  font-size: 1.6rem;
  letter-spacing: -0.02em;

  ${typography.p};

  p {
    font-size: 1rem;
    line-height: 1.75;
    font-family: montserrat;
    margin-bottom: 1.6em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h2 {
    ${typography.h2};
    line-height: 0.85em;
    margin-bottom: 3rem;

    &:not(:first-child) {
      margin-top: 2.6rem;
    }
  }

  h3 {
    ${typography.h3};
    margin-bottom: 2rem;

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  i,
  em {
    font-size: 1rem;
    font-style: normal;
  }

  strong,
  b {
    font-size: 1rem;
    font-weight: normal;
  }

  ul,
  ol {
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  li {
    padding-left: 3rem;
    margin-top: 0.8rem;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0.25em;
      left: 0;
      width: 1rem;
      height: 1.7rem;
      background-image: url('/img/icons/arrow-right-gray.svg');
    }
  }
`

const StyledConsult = styled(YachtConsult)`
  margin-top: 24rem;
`

const DetailWrapper = styled(Wrapper)`
  margin-top: 1rem;
`

const HeaderWrapper = styled.div`
  height: 1rem;
  overflow: hidden;
`

const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${color.subacive};
  margin-bottom: 3.2rem;
  padding: 2rem 4rem 1.3rem 4rem;
`

const HeaderPhone = styled.div`
  display: block;
  float: left;
  text-align: right;
  font-weight: 600;
  font-size: 0.7rem;
  margin-top: 0.2rem;
  font-family: montserrat;
  font-weight: bold;
  letter-spacing: 0.05em;
`
const HeaderLogo = styled.img`
  width: 6rem;
  display: block;
  float: left;
`

const FooterContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: ${color.backgroundDark};
`
const FooterWrapper = styled.div`
  padding: 2rem 4rem 2rem;
  height: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Contact = styled.div`
  float: left;
  width: 25%;
`

const ContactTitle = styled.div`
  font-family: montserrat;
  font-size: 0.7rem;
  line-height: 1.7rem;
  color: #666;
  margin-bottom: 0.8rem;
`
const ContactPhone = styled.div`
  font-weight: 500;
  font-family: montserrat;
  font-size: 0.9rem;
  line-height: 129.5%;
  color: #f0f0f0;
  margin-bottom: 0.8rem;
`
const ContactAddress = styled.div`
  font-size: 0.5rem;
  line-height: 1.5rem;
  font-family: montserrat;
  color: ${color.white};
`

const FooterBottom = styled.div`
  text-align: right;
`

const FooterCompany = styled.div`
  font-size: 0.5rem;
  color: #555;
`

const Image = ({ src, i }) => {
  return (
    <ImageWrapper
      style={{ backgroundImage: `url(${src})` }}
      wide={i % 4 === 0 || i % 4 === 3}
    ></ImageWrapper>
  )
}

const DetailItemWrapper = styled.div`
  width: 48%;
  float: left;
  height: 20rem;
`

const DetailItemImage = styled.div`
  width: 100%;
  height: 10rem;
  margin: 0.4rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
`

const DetailDescription = styled.div`
  margin: 0.4rem;
  font-size: 0.6rem;
  font-family: montserrat;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #333;
`

const DetailItem = ({ fullpath, properties }) => {
  const description = JSON.parse(properties)?.description
  return (
    <DetailItemWrapper>
      <DetailItemImage style={{ backgroundImage: `url(${fullpath})` }} />
      <DetailDescription>{description}</DetailDescription>
    </DetailItemWrapper>
  )
}

const PlanItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
`

const PlanDescription = styled.div`
  width: 17.4rem;
  float: left;
`
const PlanTitle = styled.div`
  font-weight: 500;
  font-family: montserrat;
  font-size: 1.2rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
`

const PlanText = styled.div`
  font-family: montserrat;
  font-size: 1rem;
  line-height: 175%;
  color: #666;
  letter-spacing: -0.02em;
  margin-top: 1rem;
`

const MaintenanceDescription = styled.div`
  width: 48rem;
  font-size: 1.6rem;
  line-height: 160%;
  margin-top: 1rem;
`

const PlanImgWrapper = styled.div`
  background-size: contain;
  height: 10rem;
  background-repeat: no-repeat;
`

const PlanImg = styled.div`
  background-size: contain;
  background-position: top right;
  background-repeat: no-repeat;
  height: 10rem;
`

const Placeholder = styled.div`
  width: 33%;
  margin-top: 0 !important;
`

const PlanHeader = styled(Title)`
  margin-top: 1.6rem;
`

const PlanItem = ({ fullpath, properties }) => {
  const description = JSON.parse(properties).description || 'Lorem'
  const button_text = JSON.parse(properties).button_text
  return (
    <PlanItemWrapper>
      <PlanDescription>
        <PlanTitle>{button_text}</PlanTitle>
        <PlanText>{description}</PlanText>
      </PlanDescription>
      <PlanImgWrapper>
        <PlanImg style={{ backgroundImage: `url(${fullpath})` }} />
      </PlanImgWrapper>
    </PlanItemWrapper>
  )
}

const Test = styled.div`
  div {
    width: 50%;
    float: left;
  }
`

const Yacht = ({ footerItems }) => {
  const router = useRouter()
  const { data } = useQuery(GET_YACHT_PRINT, {
    variables: { slug: router.query.slug, type: router.query.type },
  })

  if (data.yachts.data.length < 1) {
    return <NotFound footerItems={footerItems} />
  }

  let type =
    router.query.type === 'cost'
      ? 'sale'
      : router.query.type === 'rent_week'
      ? 'charter-week'
      : router.query.type === 'rent_day'
      ? 'charter-day'
      : router.query.type === 'project'
      ? 'project'
      : ''

  // sale || charter_week || charter_day || project
  const yacht = transformYacht(data.yachts.data[0], type)
  const { length, currency } = useSelector((state) => state)
  const {
    main_name,
    shipyard,
    ex_name,
    prices,
    lengths,
    buildDate,
    isRestored,
    body_material,
    benefits,
    about_text,
    specification_text,
    specifications,
    equipment_text,
    employee,
    slug,
    images,
    detail_images,
    deck_plan_images,
    maintenance_text,
    maintenances,
    project_completed_work,
    about_project_text,
  } = yacht

  const detailHeaderStatic = useTranslation('detailHeaderStatic')
  const detailYachtStatic = useTranslation('detailYachtStatic')

  const headerStatic = useTranslation('headerStatic')
  const contactsStatic = useTranslation('contactsStatic')
  const { addresses, mail } = contactsStatic

  let pageType

  switch (type) {
    case 'sale':
      pageType = 'Продажа'
      break
    case 'project':
      pageType = 'Проект'
      break
    default:
      pageType = 'Аренда'
  }

  return (
    <>
      <div style={{ display: 'none' }}>
        <FooterContainer id="footer">
          <FooterWrapper>
            <Contacts>
              <Contact>
                <ContactTitle>Монако</ContactTitle>
                <ContactPhone>+377.97.98.3210</ContactPhone>
                <ContactAddress>
                  27-29, Avenue des Papalins, MC 98000
                </ContactAddress>
              </Contact>
              <Contact>
                <ContactTitle>Москва</ContactTitle>
                <ContactPhone>+7 (495) 937-90-00</ContactPhone>
                <ContactAddress>
                  Ленинградское шоссе 39/7, Москва, 125212
                </ContactAddress>
              </Contact>
              <Contact>
                <ContactTitle>Киев</ContactTitle>
                <ContactPhone>+38 09 77 42 44 44</ContactPhone>
                <ContactAddress>
                  ул. Раисы Окипной 18, Киев, 02002
                </ContactAddress>
              </Contact>
              <Contact>
                <ContactTitle>Наша почта</ContactTitle>
                <ContactPhone>info@arconyachts.com</ContactPhone>
              </Contact>
            </Contacts>
            <FooterBottom>
              <FooterCompany>{new Date().getFullYear()} Arcon</FooterCompany>
            </FooterBottom>
          </FooterWrapper>
        </FooterContainer>
      </div>

      <HeaderContainer id="header">
        <HeaderWrapper>
          <HeaderLogo src={IMG_LOGO} alt="Arcon" />
          <HeaderPhone>+3 (229) 348-98-24</HeaderPhone>
        </HeaderWrapper>
      </HeaderContainer>

      <StyledContainer>
        <PageType>{pageType}</PageType>
        {shipyard && <Shipyard>{shipyard.name}</Shipyard>}

        <YachtMeta>
          <YachtName>
            {main_name}
            {ex_name && ` (${ex_name})`}
          </YachtName>
          <Price>{prices?.[currency]}</Price>
        </YachtMeta>

        <YachtInfo>
          <YachtInfoBlock>
            <header>Длина</header>
            {lengths[length]}
          </YachtInfoBlock>

          <YachtInfoBlock>
            <header>
              {isRestored
                ? detailHeaderStatic.params.restored
                : detailHeaderStatic.params.bulidDate}
            </header>
            {buildDate}
          </YachtInfoBlock>

          <YachtInfoBlock>
            <header>Материал</header>
            {body_material?.name}
          </YachtInfoBlock>
        </YachtInfo>

        {images && images.length > 0 && (
          <Wrapper id="images">
            {images.slice(0, 3).map((img, i) => (
              <Image key={i} i={i} src={img.fullpath} />
            ))}
          </Wrapper>
        )}
      </StyledContainer>

      <Page id="about">
        {type !== 'project' ? (
          <>
            <Title>{detailYachtStatic.aboutTitle}</Title>

            <Wrapper id="images">
              {images.slice(4, 5).map((img, i) => (
                <Image key={i} i={i} src={img.fullpath} />
              ))}
            </Wrapper>
            {about_text && (
              <AboutText dangerouslySetInnerHTML={{ __html: about_text }} />
            )}
            {benefits && benefits.length > 0 && (
              <AboutWrapper>
                <YachtAbout
                  description={about_text}
                  aboutRef={{ current: '' }}
                  features={benefits.map(transformBenefits)}
                  isPrint
                />
                <Placeholder />
                <Placeholder />
              </AboutWrapper>
            )}
          </>
        ) : (
          <>
            <Title>{detailYachtStatic.projectDetail.aboutTitle}</Title>
            {about_project_text && (
              <AboutText dangerouslySetInnerHTML={{ __html: about_text }} />
            )}
          </>
        )}
      </Page>

      {(specifications ||
        specification_text ||
        equipment_text ||
        project_completed_work) && (
        <Page id="specifications">
          <Title>Характеристики</Title>
          <Specs>
            {specifications.map(({ key, value }) => {
              if (!value) return
              return (
                <Spec>
                  <SpecValue>
                    <span>{value}</span>
                  </SpecValue>
                  <SpecKey>
                    <span>{key}</span>
                  </SpecKey>
                </Spec>
              )
            })}
          </Specs>
          {/*
                  <YachtSpecifications
                    defaultOpened={true}
                    specifications={specifications}
                    specification_text={specification_text}
                    equipment_text={equipment_text}
                    project_completed_work={project_completed_work}
                  />
                */}
        </Page>
      )}

      {employee && (
        <Page id="employee">
          <StyledConsult
            {...employee}
            image={employee.photo.fullpath}
            tagline={employee.quote}
            title={detailYachtStatic.consult_sale.title}
            submitText={detailYachtStatic.consult_sale.button}
            isPrint
          />
        </Page>
      )}

      {detail_images && detail_images.length > 0 && (
        <Page id="detail">
          <Title>{detailYachtStatic.detail.title}</Title>
          <DetailWrapper>
            {detail_images.slice(0, 4).map((item) => {
              return <DetailItem {...item} key={item.id} />
            })}
          </DetailWrapper>
        </Page>
      )}

      {deck_plan_images && deck_plan_images.length > 0 && (
        <Page id="plan">
          <Title>{detailYachtStatic.plan.title}</Title>
          <DetailWrapper>
            {deck_plan_images.map((item) => (
              <PlanItem {...item} key={item.id} />
            ))}
          </DetailWrapper>
        </Page>
      )}

      {maintenances && maintenances.length > 0 && (
        <Page id="maintenances">
          <PlanHeader>{detailYachtStatic.maintenances.title}</PlanHeader>
          {maintenance_text && (
            <MaintenanceDescription>{maintenance_text}</MaintenanceDescription>
          )}

          <AboutWrapper>
            <YachtService
              managementRef={{ current: '' }}
              description={maintenance_text}
              maintenances={maintenances}
              isPrint
            />
            <Placeholder />
            <Placeholder />
          </AboutWrapper>
        </Page>
      )}
    </>
  )
}

Yacht.print = {
  footer: (
    <FooterContainer id="footer">
      <FooterWrapper>
        <Contacts>
          <Contact>
            <ContactTitle>Монако</ContactTitle>
            <ContactPhone>+377.97.98.3210</ContactPhone>
            <ContactAddress>
              27-29, Avenue des Papalins, MC 98000
            </ContactAddress>
          </Contact>
          <Contact>
            <ContactTitle>Москва</ContactTitle>
            <ContactPhone>+7 (495) 937-90-00</ContactPhone>
            <ContactAddress>
              Ленинградское шоссе 39/7, Москва, 125212
            </ContactAddress>
          </Contact>
          <Contact>
            <ContactTitle>Киев</ContactTitle>
            <ContactPhone>+38 09 77 42 44 44</ContactPhone>
            <ContactAddress>ул. Раисы Окипной 18, Киев, 02002</ContactAddress>
          </Contact>
          <Contact>
            <ContactTitle>Наша почта</ContactTitle>
            <ContactPhone>info@arconyachts.com</ContactPhone>
          </Contact>
        </Contacts>
        <FooterBottom>
          <FooterCompany>{new Date().getFullYear()} Arcon</FooterCompany>
        </FooterBottom>
      </FooterWrapper>
    </FooterContainer>
  ),
}

Yacht.translation = {
  ...getTranslations({
    detailHeaderStatic: detailHeaderStatic,
    detailYachtStatic: detailYachtStatic,
    contactsStatic: contactsStatic,
    feedbackFormStatic: feedbackFormStatic,
    headerStatic: headerStatic,
    breadcrumbsStatic: breadcrumbsStatic,
    footerStatic: footerStatic,
    // contactsStatic: contactsStatic,
    spoiler: spoilerStatic,
    notFoundStatic: notFoundStatic,
  }),
}

const PageType = styled.div`
  font-family: montserrat;
  color: #666;
  font-size: 0.6rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  text-transform: uppercase;
`

const Shipyard = styled.div`
  font-size: 1.6rem;
  font-style: italic;
  font-family: sangbleusunrise;
`

const YachtName = styled.div`
  font-family: sangbleusunrise;
  font-size: 3rem;
  float: left;
  width: 70%;
  line-height: 1;
`

const YachtMeta = styled.div``

const Price = styled.div`
  text-align: right;
  float: right;
  font-family: montserrat;
  font-size: 1.6rem;
  font-weight: 500;
`

const YachtInfo = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const YachtInfoBlock = styled.div`
  float: left;
  width: 16.5%;
  font-family: montserrat;
  header {
    font-size: 0.6rem;
    color: #666;
  }
`

const Specs = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  line-height: 1.75;
`

const Spec = styled.div`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88B8AAuUB8e2ujYwAAAAASUVORK5CYII=);
  background-repeat: repeat-x;
  background-position: 0 40px;
`

const SpecKey = styled.div`
  float: left;
  width: auto;
  display: inline-block;
  color: #606060;
  font-family: montserrat;
  span {
    border-right: 1rem solid white;
    background-color: white;
  }
`

const SpecValue = styled.div`
  float: right;
  width: 30%;
  text-align: right;
  color: #3c3c3c;
  font-family: montserrat;
  span {
    border-left: 1rem solid white;
    background-color: white;
  }
`

export async function getServerSideProps(ctx) {
  const {
    query: { slug, type },
  } = ctx

  const apolloClient = initializeApollo(ctx)
  const [footerItems] = await Promise.all([
    getFooterData(apolloClient),
    await apolloClient.query({
      query: GET_YACHT_PRINT,
      variables: { slug, type },
    }),
  ])

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      footerItems,
    },
  }
}

export default Yacht
