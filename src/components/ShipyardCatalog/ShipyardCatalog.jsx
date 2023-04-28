import React, { useState } from 'react'
import FeedbackForm from '../FeedbackForm'
import ShipyardCatalogFilter from './ShipyardCatalogFilter'
import ShipyardCatalogInfo from './ShipyardCatalogInfo'
import { useTranslation } from 'utils/useTranslation'
import { FormType } from 'utils/formType'

const ShipyardCatalog = ({
  content,
  shipyardsList,
  defaultShipyards,
  filterItems,
}) => {
  const [isMenuOpened, setOpenMenu] = useState(false)
  const handleMenuClick = () => {
    setOpenMenu(!isMenuOpened)
  }
  const shipyardCatalogStatic = useTranslation('shipyardCatalogStatic')
  return (
    <>
      <ShipyardCatalogInfo
        description={content.description}
        title={content.title || shipyardCatalogStatic.pageTitle}
        onMenuClick={handleMenuClick}
      />
      <ShipyardCatalogFilter
        isMenuOpened={isMenuOpened}
        onMenuClick={handleMenuClick}
        shipyardsList={shipyardsList?.shipyards?.data || []}
        defaultShipyards={defaultShipyards?.shipyards?.data || []}
        filterItems={filterItems}
      />
      <FeedbackForm
        {...shipyardCatalogStatic.form}
        formType={FormType.yachtSelection}
      />
    </>
  )
}

export default ShipyardCatalog
