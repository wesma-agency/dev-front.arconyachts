import ServiceContent from 'components/ServiceContent'
import { useTranslation } from 'utils/useTranslation'


const TransportationPage = () => {
  const transportationStatic = useTranslation('transportationStatic')
  return <ServiceContent content={transportationStatic}  />
}

export default TransportationPage
