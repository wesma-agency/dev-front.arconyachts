import { useLazyQuery } from '@apollo/client'
import Head from 'next/head'
import MainLayout from 'layouts/MainLayout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { transformYacht } from 'utils/transformYacht'
import { useTranslation } from 'utils/useTranslation'
import { GET_FOOTER_SALE } from 'graphql/query/Footer'
import YachtCharter from 'components/YachtCharter/YachtCharter'

const CharterLayoutYacht = ({ initialProps }) => {
  const router = useRouter()
  const { locale } = router
  const { detailYacht, SEOData, newsData } = initialProps
  const detailYachtStatic = useTranslation('detailYachtStatic')

  // Footer Refetch
  const [footerItems, setFooterItems] = useState(initialProps.footerItems)
  const [loadSale, { data: footerSale }] = useLazyQuery(GET_FOOTER_SALE, {
    fetchPolicy: 'network-only',
  })
  useEffect(() => {
    loadSale()
  }, [locale])
  useEffect(() => {
    if (footerSale) {
      // setFooterItems((prev) => ({ ...prev, ...footerSale }))
      setFooterItems((prev) => ({ ...prev, ...initialProps.footerItems }))
    }
  }, [footerSale])
  // Footer RefetcEnd

  let {main_name, shipyard} = detailYacht;
  let mainNameWithoutShipyard = null;
  if(main_name && shipyard && shipyard.name) {
    let reg = new RegExp(shipyard.name, 'gi');
    mainNameWithoutShipyard = main_name.replace(reg, '');
  }

  return (
    <MainLayout
      charterPage={true}
      breadcrumbsTitle={`${detailYacht.shipyard?.name} 
      ${mainNameWithoutShipyard ? mainNameWithoutShipyard : detailYacht.main_name}`}
      infoTitle={detailYachtStatic.epilogue.charter}
      epilogueText={detailYacht.rent_epilogue_text}
      showInfo={detailYacht.rent_epilogue_text}
      footerItems={footerItems}
    >
      <Head>
        <title>
          {SEOData.yachts.data[0].seo.title
            ? SEOData.yachts.data[0].seo.title
            : `${detailYachtStatic.metaCharter.title} ${detailYacht.shipyard?.name} ${detailYacht.main_name} - Arcon Yachts`}
        </title>
        <meta
          name="description"
          content={
            SEOData.yachts.data[0].seo.description
              ? SEOData.yachts.data[0].seo.description
              : `${detailYachtStatic.metaCharter.description} ${detailYacht.main_name}`
          }
        />
      </Head>
      <YachtCharter
        page="charter-page"
        yacht={transformYacht(
          detailYacht,
          router.query.type === 'day'
            ? 'charter-day'
            : router.query.type === 'week'
            ? 'charter-week'
            : 'charter-week'
        )}
        news={newsData?.travel_news}
      />
    </MainLayout>
  )
}

export default CharterLayoutYacht
