import {
  StyledServiceCard,
  StyledHeader,
  StyledFirstItem,
  StyledParagraph,
  StyledImageWrapper,
  StyledImage,
  StyledLabel,
  StyledContent,
  StyledTitle,
} from './ManagementPage.styled'
import { useTranslation } from 'utils/useTranslation'

const ManagementPage = ({ maintenances }) => {
  const content = useTranslation('servicesStatic')
  const { pageLabel, pageTitle, pageIntro, image, linkText } = content

  return (
    <>
      <StyledHeader>
        <StyledLabel>{pageLabel}</StyledLabel>
        <StyledTitle>{pageTitle}</StyledTitle>
        <StyledParagraph>{pageIntro}</StyledParagraph>
      </StyledHeader>
      <StyledContent>
        {maintenances.map(({ id, name, description, slug }, i) =>
          i === 0 ? (
            <StyledFirstItem key={id}>
              <StyledImageWrapper>
                <StyledImage {...image} cover={true} />
              </StyledImageWrapper>
              <StyledServiceCard
                title={name}
                text={description}
                link={slug}
                isService={true}
                linkText={linkText}
              >
                {(i + 1).toString().padStart(2, '0')}
              </StyledServiceCard>
            </StyledFirstItem>
          ) : (
            <StyledServiceCard
              key={id}
              title={name}
              text={description}
              link={slug}
              isService={true}
              linkText={linkText}
            >
              {(i + 1).toString().padStart(2, '0')}
            </StyledServiceCard>
          )
        )}
      </StyledContent>
    </>
  )
}

export default ManagementPage
