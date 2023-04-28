import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'

const SellingPage = () => {
  const content = useTranslation('sellingStatic')
  return <ServiceContent content={content} />
}

export default SellingPage
