import React from 'react'
import {
  Download,
  StyledAccordion,
  StyledDownload,
  StyledDownloadWrapper,
  StyledSpecification,
  StyledSpecificationData,
  StyledSpecificationDivider,
  StyledSpecificationsWrapper,
  StyledSpecificationTitle,
  StyledSpecificationWrapper,
  StyledWrapper,
  AccordionText,
} from './YachtSpecifications.styled'
import { v4 } from 'uuid'
import { detailYachtStatic } from 'config/static/detailYacht'
import { useTranslation } from 'utils/useTranslation'
import { useRouter } from 'next/router'

const QueryTypeMap = {
  'sale': 'cost',
  'charter-week': 'rent_week',
  'charter-day': 'rent_day',
  'project': 'project',
};

const YachtSpecifications = ({
  specifications,
  specification_text,
  equipment_text,
  project_completed_work,
  defaultOpened = true,
  yachtName,
  type,
}) => {

  const { asPath, locale } = useRouter()
  const mapCharacteristic = (characteristic) => (
    <StyledSpecification key={characteristic.key}>
      <StyledSpecificationTitle>{characteristic.key}</StyledSpecificationTitle>
      <StyledSpecificationDivider />
      <StyledSpecificationData>{characteristic.value}</StyledSpecificationData>
    </StyledSpecification>
  )

  const detailYachtStatic = useTranslation('detailYachtStatic')

  let baseUrl = process.env.NEXT_PUBLIC_API
  baseUrl = baseUrl.slice(0, baseUrl.lastIndexOf('/'));

  const pdfUrl = `${baseUrl}/pdf/${locale}/${yachtName}/${QueryTypeMap[type]}`

  return (
    <StyledWrapper>
      <StyledAccordion
        title={detailYachtStatic.specifitionAccordion}
        defaultOpened={defaultOpened}
      >
        <StyledSpecificationsWrapper>
          <StyledSpecificationWrapper>
            {specifications
              .slice(0, Math.round(specifications.length / 2))
              .map(mapCharacteristic)}
          </StyledSpecificationWrapper>
          <StyledSpecificationWrapper>
            {specifications
              .slice(Math.round(specifications.length / 2))
              .map(mapCharacteristic)}
          </StyledSpecificationWrapper>
        </StyledSpecificationsWrapper>
        {specification_text && (
          <AccordionText
            dangerouslySetInnerHTML={{ __html: specification_text }}
          />
        )}
      </StyledAccordion>
      {equipment_text && (
        <StyledAccordion
          title={detailYachtStatic.equipmentAccordion}
          defaultOpened={defaultOpened}
        >
          <AccordionText dangerouslySetInnerHTML={{ __html: equipment_text }} />
        </StyledAccordion>
      )}
      {project_completed_work && (
        <StyledAccordion
          title={detailYachtStatic.project_completed_work}
          defaultOpened={defaultOpened}
        >
          <AccordionText
            dangerouslySetInnerHTML={{ __html: project_completed_work }}
          />
        </StyledAccordion>
      )}
      {yachtName && (
        <StyledDownloadWrapper>
          <StyledDownload href={pdfUrl} target="_blank">
            <Download /> {detailYachtStatic.download}
          </StyledDownload>
        </StyledDownloadWrapper>
      )}
    </StyledWrapper>
  )
}

export default YachtSpecifications
