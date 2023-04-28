import { useQuery } from '@apollo/client'
import CatalogList from 'components/CatalogPage/CatalogList'
import { PATH } from 'config/path'
import { GET_CHARTER_YACHTS_LIST } from 'graphql/query/Yachts_Charter'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { transformYacht } from 'utils/transformYacht'
import {
  StyledBlock,
  StyledDescription,
  StyledTitle,
  StyledToggle,
  StyledToggleBlock,
  StyledToggleButton,
} from './MainCatalog.styled'
import { useTranslation } from 'utils/useTranslation'
import { MainContext } from '../../../pages'
import { useRouter } from 'next/router'

const ToggleSection = ({ pathname, yachtsList, description, buttonText }) => (
  <>
    {description && <StyledDescription>{description}</StyledDescription>}
    <CatalogList
      pagination={false}
      yachtsList={yachtsList}
      catalogPage={false}
    />
    <Link prefetch={false} href={pathname} passHref>
      <StyledToggleButton isLink>{buttonText}</StyledToggleButton>
    </Link>
  </>
)

const MainCatalog = () => {
  const router = useRouter()
  const { saleData, charterData } = useContext(MainContext)
  const [toggle, setToggle] = useState(1)
  const homeStatic = useTranslation('homeStatic')
    // console.log(saleData)

  return (
    <StyledBlock>
      <StyledTitle>{homeStatic.catalog.title}</StyledTitle>
      <StyledToggleBlock>
        <StyledToggle
          onClick={() => setToggle(1)}
          isActive={toggle === 1 && true}
        >
          {homeStatic.catalog.sale}
        </StyledToggle>
        <StyledToggle
          onClick={() => setToggle(2)}
          isActive={toggle === 2 && true}
        >
          {homeStatic.catalog.charter}
        </StyledToggle>
      </StyledToggleBlock>
      {toggle === 1 && (
        <ToggleSection
          yachtsList={saleData.yachts.data.map((item) =>
            transformYacht(item, 'sale')
          )}
          pathname={PATH.SALE_CATALOG}
          buttonText={homeStatic.catalog.buttonText}
          description={homeStatic.catalog.saleDescription}
        />
      )}
      {toggle === 2 && (
        <ToggleSection
          yachtsList={charterData.yachts.data.map((item) =>
            transformYacht(item, 'charter')
          )}
          pathname={PATH.CHARTER_CATALOG}
          buttonText={homeStatic.catalog.buttonText}
          description={homeStatic.catalog.charterDescription}
        />
      )}
    </StyledBlock>
  )
}

export default MainCatalog
